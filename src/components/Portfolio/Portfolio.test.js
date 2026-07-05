import { render } from '@testing-library/react';
import Portfolio from './Portfolio';

describe('Portfolio Component', () => {
    test('renders without crashing', () => {
        render(<Portfolio />);
    });
});