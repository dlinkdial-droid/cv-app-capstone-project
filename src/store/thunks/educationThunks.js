import { createAsyncThunk } from '@reduxjs/toolkit';

// Асинхронный thunk-экшен для получения списка образований
export const fetchEducations = createAsyncThunk(
    'education/fetchEducations',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('/api/educations');

            if (!response.ok) {
                throw new Error('Не удалось загрузить данные об образовании');
            }

            const data = await response.json();

            // Если Mirage возвращает объект { educations: [...] }, отдаем именно массив
            return data.educations || data;

        } catch (error) {
            // Перехватываем ошибку и отправляем её текст прямо в reducer (в extraReducers)
            return rejectWithValue(error.message);
        }
    }
);