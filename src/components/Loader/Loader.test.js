import React from 'react';
import { render } from '@testing-library/react';
import Loader from './Loader';

describe('Loader Component', () => {
    test('успешно рендерит компонент лоадера', () => {
        // Используем container для поиска по CSS-классу
        const { container } = render(<Loader />);
        const loaderElement = container.querySelector('.custom-loader');

        expect(loaderElement).toBeInTheDocument();
    });
});