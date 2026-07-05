import { fetchSkills, addSkill, updateSkill } from './skillsThunks';

// Мокаем глобальный fetch
global.fetch = jest.fn();

describe('skills thunks', () => {
    let dispatch;
    let getState;
    let setItemSpy;

    // ГАРАНТИРОВАННЫЙ МОК CRYPTO ДЛЯ JSDOM / NODE
    beforeAll(() => {
        Object.defineProperty(globalThis, 'crypto', {
            value: {
                randomUUID: () => 'mocked-uuid-1234'
            },
            configurable: true, // Важно, чтобы можно было перезаписать
        });
    });

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
        jest.clearAllMocks();

        // Используем встроенный localStorage из JSDOM
        localStorage.clear();
        setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
    });

    afterEach(() => {
        setItemSpy.mockRestore();
    });

    describe('fetchSkills', () => {
        it('должен возвращать данные с сервера и сохранять в пустой localStorage', async () => {
            const mockData = { skills: [{ id: '1', name: 'React' }] };
            fetch.mockResolvedValueOnce({ ok: true, json: async () => mockData });

            const action = await fetchSkills()(dispatch, getState, undefined);

            expect(action.type).toBe('skills/fetchSkills/fulfilled');
            expect(action.payload).toEqual(mockData.skills);
            expect(setItemSpy).toHaveBeenCalledWith('skills', JSON.stringify(mockData.skills));
        });

        it('должен возвращать данные из localStorage, если они там есть', async () => {
            const localData = [{ id: '2', name: 'Redux' }];
            // Записываем данные в нативный JSDOM localStorage
            localStorage.setItem('skills', JSON.stringify(localData));

            fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ skills: [{ id: '1', name: 'React' }] }) });

            const action = await fetchSkills()(dispatch, getState, undefined);

            expect(action.type).toBe('skills/fetchSkills/fulfilled');
            expect(action.payload).toEqual(localData); // Теперь точно вернет 2!
        });

        it('должен обрабатывать ошибку сети (rejected)', async () => {
            fetch.mockResolvedValueOnce({ ok: false });

            const action = await fetchSkills()(dispatch, getState, undefined);

            expect(action.type).toBe('skills/fetchSkills/rejected');
        });
    });

    describe('addSkill', () => {
        it('должен отправлять POST запрос, добавлять UUID и сохранять в localStorage', async () => {
            const newSkill = { name: 'Jest' };
            fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ skill: newSkill }) });

            const action = await addSkill(newSkill)(dispatch, getState, undefined);

            expect(action.type).toBe('skills/addSkill/fulfilled');
            expect(action.payload).toEqual({ name: 'Jest', id: 'mocked-uuid-1234' });

            // Проверяем, что в LS записался массив с новым скиллом
            expect(setItemSpy).toHaveBeenCalledWith('skills', JSON.stringify([{ name: 'Jest', id: 'mocked-uuid-1234' }]));
        });
    });

    describe('updateSkill', () => {
        it('должен отправлять PUT запрос и обновлять данные в localStorage', async () => {
            const initialSkills = [{ id: 'mocked-uuid-1234', name: 'Old Name' }];
            localStorage.setItem('skills', JSON.stringify(initialSkills));
            setItemSpy.mockClear(); // Очищаем историю вызовов шпиона после сетапа

            const updatedSkill = { id: 'mocked-uuid-1234', name: 'New Name' };
            fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ skill: updatedSkill }) });

            const action = await updateSkill(updatedSkill)(dispatch, getState, undefined);

            expect(action.type).toBe('skills/updateSkill/fulfilled');
            expect(action.payload).toEqual(updatedSkill);
            expect(setItemSpy).toHaveBeenCalledWith('skills', JSON.stringify([updatedSkill]));
        });
    });
});