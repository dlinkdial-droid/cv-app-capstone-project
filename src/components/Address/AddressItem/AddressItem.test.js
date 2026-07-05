import React from 'react';
import { render } from '@testing-library/react';
import AddressItem from './AddressItem';

describe('AddressItem Component', () => {
    test('renders without crashing', () => {
        const { container } = render(<AddressItem icon="phone" text="123" />);
        expect(container.firstChild).toBeInTheDocument();
    });
});