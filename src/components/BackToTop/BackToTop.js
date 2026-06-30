import React, { useState, useEffect } from 'react';
import './BackToTop.scss';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Логика появления кнопки при скролле
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className={`back-to-top ${isVisible ? 'show' : ''}`}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            {/* Можно вставить иконку стрелки или текст */}
            ↑
        </button>
    );
};

export default BackToTop;