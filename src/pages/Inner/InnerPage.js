import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Panel from "../../components/Panel/Panel";
import Box from '../../components/Box/Box';
import BackToTop from "../../components/BackToTop/BackToTop";
import TimeLine from "../../components/TimeLine/TimeLine";
import Expertise from '../../components/Expertise/Expertise';
import Portfolio from "../../components/Portfolio/Portfolio";
import Address from "../../components/Address/Address";
import Feedback from '../../components/Feedback/Feedback';
import reporterAvatar from '../../assets/images/reporter_img.png';
import Skills from "../../components/Skills/Skills";

import "./InnerPage.scss";

const sectionAnimation = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.6, ease: "easeOut" }
};

const Inner = () => {
    const [activeId, setActiveId] = useState("about");
    const feedbackData = [
        {
            feedback: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ",
            reporter: {
                photoUrl: reporterAvatar,
                name: "John Doe",
                citeUrl: "https://www.citeexample.com"
            }
        },
        {
            feedback: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ",
            reporter: {
                photoUrl: reporterAvatar,
                name: "John Doe",
                citeUrl: "https://www.citeexample.com"
            }
        }
    ];

    useEffect(() => {
        // Принудительно поднимаем страницу вверх при загрузке
        window.scrollTo(0, 0);

        const sectionIds = ["about", "education", "experience", "skills", "portfolio", "contacts", "feedbacks"];

        // Объект-карта, где мы будем хранить актуальное состояние каждой секции (true/false)
        const intersections = {};

        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -60% 0px", // Зона триггера в верхней части экрана
            threshold: 0
        };

        const observerCallback = (entries) => {
            // 1. Записываем текущее состояние пересечения для изменившихся секций
            entries.forEach((entry) => {
                intersections[entry.target.id] = entry.isIntersecting;
            });

            // 2. Ищем САМУЮ ПЕРВУЮ секцию из нашего массива sectionIds, которая сейчас имеет статус true
            const activeSection = sectionIds.find((id) => intersections[id]);

            // 3. Если такая нашлась — делаем её активной в меню
            if (activeSection) {
                setActiveId(activeSection);
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Даем небольшую паузу на инициализацию анимаций, затем вешаем обсервер
        const timeoutId = setTimeout(() => {
            sectionIds.forEach((id) => {
                const el = document.getElementById(id);
                if (el) observer.observe(el);
            });
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, []);

    return (
        <motion.div
            className="inner-page"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
        >
            <Panel activeId={activeId} setActiveId={setActiveId} />

            <main className="inner-page__content">
                <motion.section id="about" className="inner-page__section" {...sectionAnimation}>
                    <Box />
                </motion.section>

                <motion.section id="education" className="inner-page__section" {...sectionAnimation}>
                    <TimeLine />
                </motion.section>

                <motion.section id="experience" className="inner-page__section" {...sectionAnimation}>
                    <Expertise />
                </motion.section>

                <motion.section id="skills" className="inner-page__section" {...sectionAnimation}>
                    <Skills />
                </motion.section>

                <motion.section id="portfolio" className="inner-page__section" {...sectionAnimation}>
                    <Portfolio />
                </motion.section>

                <motion.section id="contacts" className="inner-page__section" {...sectionAnimation}>
                    <Address />
                </motion.section>

                <motion.section id="feedbacks" className="inner-page__section" {...sectionAnimation}>
                    <Feedback title="Feedbacks" data={feedbackData} />
                </motion.section>
            </main>

            <BackToTop />
        </motion.div>
    );
};

export default Inner;