import { render, screen } from '@testing-library/react';
import FeedbackItem from './FeedbackItem';

describe('FeedbackItem Component', () => {
    test('renders without crashing', () => {
        const mockItem = {
            feedback: 'Отличный код, всё работает!',
            reporter: {
                name: 'John Doe',
                photoUrl: 'https://via.placeholder.com/150',
                citeUrl: 'https://www.github.com/johndoe'
            }
        };

        render(<FeedbackItem item={mockItem} />);

        // Базовая проверка, что имя отрендерилось
        expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    });
});