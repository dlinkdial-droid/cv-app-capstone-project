import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import SkillsForm from './SkillsForm';

describe('SkillsForm Component', () => {
    test('renders without crashing', async () => {
        render(
            <Provider store={store}>
                <SkillsForm />
            </Provider>
        );

        // Ждем, пока Formik отработает validateOnMount и обновит стейт
        await waitFor(() => {
            expect(screen.getByLabelText(/Skill name/i)).toBeInTheDocument();
        });
    });
});