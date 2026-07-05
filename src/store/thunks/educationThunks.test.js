import { fetchEducations } from './educationThunks'; // Проверь путь к файлу

global.fetch = jest.fn();

describe('education thunks', () => {
    let dispatch;
    let getState;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
        jest.clearAllMocks();
    });

    it('успешный fetchEducations должен возвращать данные об образовании', async () => {
        const mockData = { educations: [{ id: 1, university: 'MIT' }] };
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData
        });

        const action = await fetchEducations()(dispatch, getState, undefined);

        expect(action.type).toBe('education/fetchEducations/fulfilled');
        expect(action.payload).toEqual(mockData.educations);
    });

    it('fetchEducations должен возвращать fallback дату, если нет объекта educations', async () => {
        const mockData = [{ id: 1, university: 'Harvard' }]; // Пришел просто массив
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData
        });

        const action = await fetchEducations()(dispatch, getState, undefined);

        expect(action.type).toBe('education/fetchEducations/fulfilled');
        expect(action.payload).toEqual(mockData);
    });

    it('fetchEducations должен возвращать rejected при ошибке', async () => {
        fetch.mockResolvedValueOnce({ ok: false });

        const action = await fetchEducations()(dispatch, getState, undefined);

        expect(action.type).toBe('education/fetchEducations/rejected');
        expect(action.payload).toBe('Не удалось загрузить данные об образовании');
    });
});