// Info.jsx
import React from 'react';
import './Info.scss';

const Info = ({ title, content, className = '' }) => {
    return (
        <div className={`info ${className}`.trim()}>
            <h3 className="info__title">{title}</h3>
            <p className="info__content">{content}</p>
        </div>
    );
};

export default Info;