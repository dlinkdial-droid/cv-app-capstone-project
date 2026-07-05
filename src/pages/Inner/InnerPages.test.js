import { render, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../store/store';
import Inner from './InnerPage';
import React from 'react';

// 1. Safely mock window properties using Object.defineProperty
beforeAll(() => {
    // Убираем ошибку Error: Not implemented: window.scrollTo
    window.scrollTo = jest.fn();

    // Делаем мок классом, чтобы компонент мог вызывать new IntersectionObserver()
    global.IntersectionObserver = class IntersectionObserver {
        constructor() { }
        observe() { }
        unobserve() { }
        disconnect() { }
    };
});

// 2. Mock framer-motion to bypass JSDOM layout calculation crashes
jest.mock('framer-motion', () => {
    // ВАЖНО: Изолированный импорт React нужен именно здесь, 
    // потому что Jest поднимает этот блок в самый верх при компиляции.
    const React = require('react');
    const actual = jest.requireActual('framer-motion');

    return {
        ...actual,
        motion: {
            // Strip out animation props so they don't hit the DOM
            div: React.forwardRef(({ initial, animate, exit, transition, whileInView, viewport, ...props }, ref) => (
                <div ref={ref} {...props} />
            )),
            section: React.forwardRef(({ initial, animate, exit, transition, whileInView, viewport, ...props }, ref) => (
                <section ref={ref} {...props} />
            )),
        },
    };
});

describe('Inner Component', () => {
    test('renders correctly and handles lifecycle', async () => {
        jest.useFakeTimers();

        await act(async () => {
            render(
                <Provider store={store}>
                    <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                        <Inner />
                    </MemoryRouter>
                </Provider>
            );
        });

        act(() => {
            jest.runAllTimers();
        });

        const content = document.querySelector('.inner-page');
        expect(content).toBeInTheDocument();

        jest.useRealTimers();
    });
});