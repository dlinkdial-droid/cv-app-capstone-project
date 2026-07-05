import { createSlice } from '@reduxjs/toolkit';
import { fetchSkills, addSkill, updateSkill } from '../thunks/skillsThunks'; // Импортируем наши санки

const skillsSlice = createSlice({
    name: 'skills',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {}, // Если появятся синхронные экшены, они будут тут
    extraReducers: (builder) => {
        builder
            // Обработка загрузки списка навыков
            .addCase(fetchSkills.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSkills.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchSkills.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Обработка успешного добавления нового навыка
            .addCase(addSkill.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(updateSkill.fulfilled, (state, action) => {
                const index = state.items.findIndex((item) => item.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload; // Меняем старый скилл на обновленный
                }
            });
    },
});

export default skillsSlice.reducer;