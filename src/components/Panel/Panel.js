import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import PhotoBox from "../PhotoBox/PhotoBox";
import Button from "../Button/Button";
import { faBars, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import "./Panel.scss";
import { useNavigate } from "react-router-dom";

const Panel = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeId, setActiveId] = useState("about");
    const navigate = useNavigate();

    return (
        <aside className={`panel ${isCollapsed ? "panel--collapsed" : ""}`}>

            {/* Первая дивка: Весь контент (Фото, Меню, Кнопка) */}
            <div className="panel__content">
                <PhotoBox userName="John Doe" />

                {/* Передаем стейт вовнутрь */}
                <Navigation activeId={activeId} setActiveId={setActiveId} />

                <div className="panel__footer">
                    <Button
                        icon={faAngleLeft}
                        text="Go back"
                        onClick={() => navigate('/')}
                    />
                </div>
            </div>

            {/* Вторая дивка: Зона гамбургера (Прозрачная полоса) */}
            <div className="panel__handle">
                <Button
                    icon={faBars}
                    onClick={() => setIsCollapsed(!isCollapsed)}
                />
            </div>

        </aside>
    );
};

export default Panel;