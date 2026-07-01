import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import PhotoBox from "../PhotoBox/PhotoBox";
import Button from "../Button/Button";
import { faBars, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import "./Panel.scss";
import { useNavigate } from "react-router-dom";

const Panel = ({ activeId, setActiveId }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const navigate = useNavigate();

    return (
        <aside className={`panel ${isCollapsed ? "panel--collapsed" : ""}`}>

            <div className="panel__content">
                <PhotoBox userName="John Doe" />

                <Navigation activeId={activeId} setActiveId={setActiveId} />

                <div className="panel__footer">
                    <Button
                        icon={faAngleLeft}
                        text="Go back"
                        onClick={() => navigate('/')}
                    />
                </div>
            </div>

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