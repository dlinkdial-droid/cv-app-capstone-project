import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'; // Те самые две стрелки
import './Loader.scss';

const Loader = () => {
    return (
        <div className="custom-loader">
            <FontAwesomeIcon icon={faSyncAlt} className="custom-loader__spinner" />
        </div>
    );
};

export default Loader;