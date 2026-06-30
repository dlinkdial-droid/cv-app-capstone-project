import React from 'react';
import './FilterTab.scss';

const FilterTab = ({ label, isActive, onClick }) => {
    return (
        <button
            className={`filter-tab ${isActive ? "filter-tab--active" : ""}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default FilterTab;