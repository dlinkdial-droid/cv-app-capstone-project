import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // 1. Обязательно импортируем
import "./Button.scss";

const Button = ({ icon, text, onClick, type = "button" }) => {
    return (
        <button type={type} className="custom-btn" onClick={onClick}>
            {/* 2. Рендерим объект иконки через правильный компонент */}
            {icon && (
                <span className="custom-btn__icon">
                    <FontAwesomeIcon icon={icon} />
                </span>
            )}
            {text && <span className="custom-btn__text">{text}</span>}
        </button>
    );
};

export default Button;