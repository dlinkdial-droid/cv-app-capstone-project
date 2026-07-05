import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './Error';

describe('Error Component', () => {
    test('renders error message correctly', () => {
        render(<Error message="Критическая ошибка" />);
        expect(screen.getByText('Критическая ошибка')).toBeInTheDocument();
    });
});