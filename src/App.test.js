import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: () => <div data-testid="mock-navigate" />,
}));

describe('App Component Routing', () => {

  test('1. Успешно рендерит главную страницу (HomePage) по умолчанию', () => {
    render(<App />);

    const titleElement = screen.getByText(/Programmer. Creative. Innovator/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('2. На главной странице присутствует кнопка "Know more"', () => {
    render(<App />);

    const buttonElement = screen.getByRole('button', { name: /Know more/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('3. Текст описания (Lorem ipsum) отображается корректно', () => {
    render(<App />);

    const descriptionText = screen.getByText(/Lorem ipsum dolor sit amet/i);
    expect(descriptionText).toBeInTheDocument();
  });

});