import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavigationItem.scss";

const NavigationItem = ({ label, icon, status, href, onClick }) => {
    return (
        <li className="navigation-item">
            <a
                href={href}
                className={`navigation-item__link ${status === "selected" ? "navigation-item__link--selected" : ""}`}
                onClick={(e) => {
                    e.preventDefault();
                    onClick();
                }}
            >
                <FontAwesomeIcon icon={icon} className="navigation-item__icon" />
                <span className="navigation-item__text">{label}</span>
            </a>
        </li>
    );
};

export default NavigationItem;