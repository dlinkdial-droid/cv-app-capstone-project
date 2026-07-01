import React from 'react';
import {
    faUser,
    faGraduationCap,
    faPen,
    faGem,
    faBriefcase,
    faPaperPlane,
    faComment
} from '@fortawesome/free-solid-svg-icons';
import NavigationItem from "./NavigationItem/NavigationItem";
import "./Navigation.scss";

const Navigation = ({ activeId, setActiveId }) => {
    const navItems = [
        { id: "about", label: "About me", icon: faUser },
        { id: "education", label: "Education", icon: faGraduationCap },
        { id: "experience", label: "Experience", icon: faPen },
        // { id: "skills", label: "Skills", icon: faGem },
        { id: "portfolio", label: "Portfolio", icon: faBriefcase },
        { id: "contacts", label: "Contacts", icon: faPaperPlane },
        { id: "feedbacks", label: "Feedbacks", icon: faComment }
    ];

    return (
        <nav className="navigation">
            <ul className="navigation__list">
                {navItems.map((item) => (
                    <NavigationItem
                        key={item.id}
                        icon={item.icon}
                        label={item.label}
                        href={`#${item.id}`}
                        status={activeId === item.id ? "selected" : "default"}
                        onClick={() => {
                            setActiveId(item.id); // 1. Мгновенно ставим активный ID

                            const targetSection = document.getElementById(item.id);
                            if (targetSection) {
                                targetSection.scrollIntoView({ behavior: "smooth", block: "start" }); // 2. Начинаем плавный скролл
                            }
                        }}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;