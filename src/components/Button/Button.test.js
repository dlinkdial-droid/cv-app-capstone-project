import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';
import { faPen } from '@fortawesome/free-solid-svg-icons'; // Берем любую иконку для теста

describe('Button Component', () => {
    // Тест 1: Проверка рендера текста через пропс
    test('renders button with correct text prop', () => {
        render(<Button text="Save Skill" />);
        const textElement = screen.getByText('Save Skill');
        expect(textElement).toBeInTheDocument();
    });

    // Тест 2: Проверка клика
    test('calls onClick handler when clicked', () => {
        const handleClick = jest.fn();
        render(<Button text="Click" onClick={handleClick} />);

        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    // Тест 3: Проверка блокировки кнопки (теперь точно сработает!)
    test('is disabled when disabled prop is true', () => {
        render(<Button text="Submit" disabled={true} />);

        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeDisabled();
    });

    // Тест 4: Проверка рендера иконки FontAwesome
    test('renders icon when icon prop is provided', () => {
        render(<Button text="Edit" icon={faPen} />);

        // Ищем иконку по добавленному нами data-testid
        const iconContainer = screen.getByTestId('button-icon');
        expect(iconContainer).toBeInTheDocument();
    });

    // Тест 5: Проверка, что без текста спан с классом не рендерится
    test('does not render text span if text prop is missing', () => {
        // Забираем container из рендера для поиска по классам
        const { container } = render(<Button icon={faPen} />);

        const textElement = container.querySelector('.custom-btn__text');
        // Элемент не должен быть найден (должен быть null)
        expect(textElement).toBeNull();
    });
});