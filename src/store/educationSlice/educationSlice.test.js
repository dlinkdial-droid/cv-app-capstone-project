import educationReducer from './educationSlice';

describe('educationSlice', () => {
    const initialState = {
        items: [],
        status: 'idle',
        error: null
    };

    test('должен возвращать дефолтный стейт', () => {
        expect(educationReducer(undefined, { type: undefined })).toEqual(initialState);
    });

    test('должен обрабатывать pending', () => {
        const action = { type: 'education/fetchEducations/pending' };
        const state = educationReducer(initialState, action);
        expect(state.status).toBe('loading');
        expect(state.error).toBeNull();
    });

    test('должен обрабатывать fulfilled', () => {
        const mockData = [{ id: 1, title: 'Test Education' }];
        const action = { type: 'education/fetchEducations/fulfilled', payload: mockData };
        const state = educationReducer(initialState, action);
        expect(state.status).toBe('succeeded');
        expect(state.items).toEqual(mockData);
    });

    test('должен обрабатывать rejected', () => {
        const action = {
            type: 'education/fetchEducations/rejected',
            error: { message: 'Ошибка сервера 500' }
        };
        const state = educationReducer(initialState, action);
        expect(state.status).toBe('failed');
        expect(state.error).toBe('Ошибка сервера 500');
    });
});