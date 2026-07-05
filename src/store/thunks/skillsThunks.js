import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSkills = createAsyncThunk(
    'skills/fetchSkills',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('/api/skills');

            if (!response.ok) {
                throw new Error('Не удалось загрузить список навыков');
            }

            const data = await response.json();
            const serverSkills = data.skills || data;

            // 2. Сразу после запроса проверяем локальное хранилище
            const localData = localStorage.getItem('skills');
            if (localData) {
                // Если там уже есть данные (например, ранее добавленные через форму),
                // возвращаем их, чтобы не перезаписывать базу старыми дефолтными сидами
                return JSON.parse(localData);
            }

            // 3. Если localStorage было пустым, заполняем его базовыми данными с сервера
            localStorage.setItem('skills', JSON.stringify(serverSkills));
            return serverSkills;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addSkill = createAsyncThunk(
    'skills/addSkill',
    async (newSkill, { rejectWithValue }) => {
        try {
            const response = await fetch('/api/skills', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newSkill),
            });

            if (!response.ok) {
                throw new Error('Не удалось сохранить новый навык на сервере');
            }

            const savedSkill = await response.json();
            const actualSkill = savedSkill.skill || savedSkill;

            // ГАРАНТИРУЕМ УНИКАЛЬНОСТЬ ID:
            const skillWithUniqueId = {
                ...actualSkill,
                id: crypto.randomUUID()
            };

            const localData = localStorage.getItem('skills');
            const currentSkills = localData ? JSON.parse(localData) : [];
            const updatedSkills = [...currentSkills, skillWithUniqueId];

            localStorage.setItem('skills', JSON.stringify(updatedSkills));

            return skillWithUniqueId;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const updateSkill = createAsyncThunk(
    'skills/updateSkill',
    async (updatedSkillData, { rejectWithValue }) => {
        try {
            const response = await fetch('/api/skills', {
                method: 'PUT', // Отправляем PUT запрос для обновления данных
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedSkillData),
            });

            if (!response.ok) {
                throw new Error('Не удалось обновить навык на сервере');
            }

            const savedSkill = await response.json();
            const actualSkill = savedSkill.skill || savedSkill;

            // Собираем финальный объект (на случай, если сервер вернул не полные данные)
            const finalSkill = { ...updatedSkillData, ...actualSkill };

            // Синхронизируем изменения с localStorage
            const localData = localStorage.getItem('skills');
            const currentSkills = localData ? JSON.parse(localData) : [];

            const updatedSkills = currentSkills.map((skill) =>
                skill.id === finalSkill.id ? finalSkill : skill
            );

            localStorage.setItem('skills', JSON.stringify(updatedSkills));

            return finalSkill;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);