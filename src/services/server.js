import { createServer, Model } from "miragejs";

export default function makeServer({ environment = "development" } = {}) {
    return createServer({
        environment,

        models: {
            education: Model,
            skill: Model,
            experienceItem: Model,
        },

        seeds(server) {
            server.create("education", {
                date: "2001",
                title: "Title 0",
                text: "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n"
            });
            server.create("education", {
                date: "2000",
                title: "Title 1",
                text: "Et irure culpa ad proident labore excepteur elit dolore. Quis commodo elit culpa eiusmod dolor proident non commodo excepteur aute duis duis eu fugiat. Eu duis occaecat nulla eiusmod non esse cillum est aute elit amet cillum commodo.\r\n"
            });
            server.create("education", {
                date: "2012",
                title: "Title 2",
                text: "Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud. Enim pariatur ullamco dolor eu sunt ad velit aute eiusmod aliquip voluptate. Velit magna labore eiusmod eiusmod labore amet eiusmod. In duis eiusmod commodo duis. Exercitation Lorem sint do aliquip veniam duis elit quis culpa irure quis nulla. Reprehenderit fugiat amet sint commodo ex.\r\n"
            });

            server.create("skill", { name: "JavaScript", range: 80 });
            server.create("skill", { name: "React", range: 75 });

            server.create("experienceItem", {
                date: "2013-2014",
                info: {
                    company: "Google",
                    job: "Front-end developer / php programmer",
                    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
                }
            });
            server.create("experienceItem", {
                date: "2012",
                info: {
                    company: "Twitter",
                    job: "Web developer",
                    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
                }
            });
        },

        routes() {
            this.namespace = "api";

            this.get("/educations", (schema) => {
                return schema.educations.all().models;
            }, { timing: 3000 });

            this.get("/skills", (schema) => {
                return schema.skills.all().models;
            }, { timing: 3000 });

            this.post("/skills", (schema, request) => {
                const attrs = JSON.parse(request.requestBody);
                attrs.range = Number(attrs.range);

                const newSkill = schema.skills.create(attrs);

                return newSkill.attrs;
            });

            // НОВЫЙ МЕТОД: Обработка PUT-запроса для обновления ранга существующего скилла
            this.put("/skills", (schema, request) => {
                const attrs = JSON.parse(request.requestBody);
                attrs.range = Number(attrs.range);

                // 1. Пробуем найти скилл по ID в базе Mirage
                let skillModel = schema.skills.find(attrs.id);

                // 2. Если по ID не нашли (из-за генерации UUID на фронте), ищем по имени без учета регистра
                if (!skillModel && attrs.name) {
                    skillModel = schema.skills.all().models.find(
                        (s) => s.name && s.name.trim().toLowerCase() === attrs.name.trim().toLowerCase()
                    );
                }

                // 3. Если нашли запись в Mirage — обновляем её данные
                if (skillModel) {
                    skillModel.update(attrs);
                    return skillModel.attrs;
                }

                // 4. Фолбек: если скилла почему-то вообще нет в базе Mirage, создаем его
                const newSkill = schema.skills.create(attrs);
                return newSkill.attrs;
            });

            this.get("/experience", (schema) => {
                return schema.experienceItems.all().models;
            }, { timing: 3000 });

        },
    });
}