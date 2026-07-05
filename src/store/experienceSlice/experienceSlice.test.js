import experienceReducer from './experienceSlice';
import { fetchExperience } from '../thunks/experienceThunks';

describe('experienceSlice', () => {
    const initialState = {
        items: [],
        status: 'idle',
        error: null
    };

    test('должен возвращать дефолтный стейт', () => {
        expect(experienceReducer(undefined, { type: undefined })).toEqual(initialState);
    });

    test('должен обрабатывать pending', () => {
        const state = experienceReducer(initialState, { type: fetchExperience.pending.type });
        expect(state.status).toBe('loading');
    });

    test('должен обрабатывать fulfilled', () => {
        const mockData = [{ id: 1, title: 'Developer' }];
        const state = experienceReducer(initialState, {
            type: fetchExperience.fulfilled.type,
            payload: mockData
        });
        expect(state.status).toBe('succeeded');
        expect(state.items).toEqual(mockData);
    });

    test('должен обрабатывать rejected', () => {
        const state = experienceReducer(initialState, {
            type: fetchExperience.rejected.type,
            error: { message: 'Network Error' }
        });
        expect(state.status).toBe('failed');
        expect(state.error).toBe('Network Error');
    });
});