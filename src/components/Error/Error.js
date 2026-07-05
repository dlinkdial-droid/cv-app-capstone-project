import React from 'react';
import './Error.scss';

const Error = ({ message = 'Something went wrong; please review your server connection!' }) => {
    return (
        <div className="custom-error">
            <p className="custom-error__text">{message}</p>
        </div>
    );
};

export default Error;