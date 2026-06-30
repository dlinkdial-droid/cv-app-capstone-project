import "./PhotoBox.scss";
import avatar from "../../assets/images/avatar.png";

const PhotoBox = ({ userName, className }) => {
    return (
        <figure className={`photo-box ${className || ""}`}>
            <img src={avatar} alt={userName} className="photo-box__image" />
            <figcaption className="photo-box__name">{userName}</figcaption>
        </figure>
    );
};

export default PhotoBox;