import "./PhotoBox.scss";
import avatar from "../../assets/images/avatar.png"; // Путь к твоей дефолтной фотке

const PhotoBox = ({ userName }) => {
    return (
        <figure className="photo-box">
            <img src={avatar} alt={userName} className="photo-box__image" />
            <figcaption className="photo-box__name">{userName}</figcaption>
        </figure>
    );
};

export default PhotoBox;