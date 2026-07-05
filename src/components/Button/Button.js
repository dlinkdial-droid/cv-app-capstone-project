import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Button.scss";

// 1. Добавляем className = "" в список принимаемых пропов
const Button = ({ icon, text, onClick, type = "button", disabled = false, className = "" }) => {
    return (
        <button
            type={type}
            className={`custom-btn ${className}`.trim()}
            onClick={onClick}
            disabled={disabled}
        >
            {icon && (
                <span className="custom-btn__icon" data-testid="button-icon">
                    <FontAwesomeIcon icon={icon} />
                </span>
            )}
            {text && <span className="custom-btn__text">{text}</span>}
        </button>
    );
};

export default Button;