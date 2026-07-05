import { createSlice } from '@reduxjs/toolkit';
import { fetchEducations } from '../thunks/educationThunks';

const educationSlice = createSlice({
    name: 'education',
    initialState: {
        items: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEducations.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchEducations.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchEducations.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default educationSlice.reducer;