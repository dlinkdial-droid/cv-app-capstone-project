import FeedbackItem from "./FeedbackItem/FeedbackItem";
import "./Feedback.scss";

const Feedback = ({ title, data }) => {
    return (
        <section className="feedback">
            <h2 className="feedback__title">{title}</h2>
            <ul className="feedback__list">
                {data.map((item, index) => (
                    <li key={index} className="feedback__item-wrapper">
                        <FeedbackItem item={item} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Feedback;