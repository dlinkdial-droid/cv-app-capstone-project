import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

describe('Box Component', () => {
    test('renders without crashing', () => {
        const { container } = render(<Box title="Test" />);
        expect(container.firstChild).toBeInTheDocument();
    });
});