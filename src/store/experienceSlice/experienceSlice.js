import { createSlice } from '@reduxjs/toolkit';
import { fetchExperience } from '../thunks/experienceThunks';

const experienceSlice = createSlice({
    name: 'experience',
    initialState: {
        items: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchExperience.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchExperience.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchExperience.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || action.error.message;
            });
    }
});

export default experienceSlice.reducer;