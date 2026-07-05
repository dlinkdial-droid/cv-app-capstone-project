import skillsReducer from './skillsSlice';

describe('skillsSlice', () => {
    const initialState = {
        items: [],
        status: 'idle',
        error: null
    };

    test('должен возвращать дефолтный стейт', () => {
        expect(skillsReducer(undefined, { type: undefined })).toEqual(initialState);
    });

    test('должен обрабатывать pending запроса скилов', () => {
        const action = { type: 'skills/fetchSkills/pending' };
        const state = skillsReducer(initialState, action);
        expect(state.status).toBe('loading');
    });

    test('должен обрабатывать fulfilled добавления скила', () => {
        const newSkill = { id: 2, name: 'React', range: '80' };
        const action = { type: 'skills/addSkill/fulfilled', payload: newSkill };
        const state = skillsReducer(initialState, action);
        expect(state.items).toContainEqual(newSkill);
    });
});