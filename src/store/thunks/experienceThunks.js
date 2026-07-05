import { createAsyncThunk } from '@reduxjs/toolkit';

// Асинхронный thunk-экшен для получения списка экспертизы
export const fetchExperience = createAsyncThunk(
    'experience/fetchExperience',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('/api/experience');

            if (!response.ok) {
                throw new Error('Ошибка при загрузке опыта работы');
            }

            const data = await response.json();

            return data.experience || data;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);