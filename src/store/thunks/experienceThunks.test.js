import { fetchExperience } from './experienceThunks'; // Путь может отличаться

global.fetch = jest.fn();

describe('experience thunks', () => {
    let dispatch;
    let getState;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
        jest.clearAllMocks();
    });

    it('успешный fetchExperience должен возвращать массив опыта', async () => {
        const mockData = { experience: [{ id: 1, company: 'Google' }] };
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData
        });

        const action = await fetchExperience()(dispatch, getState, undefined);

        expect(action.type).toBe('experience/fetchExperience/fulfilled');
        expect(action.payload).toEqual(mockData.experience);
    });

    it('fetchExperience должен возвращать rejected при ошибке', async () => {
        fetch.mockResolvedValueOnce({ ok: false });

        const action = await fetchExperience()(dispatch, getState, undefined);

        expect(action.type).toBe('experience/fetchExperience/rejected');
        expect(action.payload).toBe('Ошибка при загрузке опыта работы');
    });
});