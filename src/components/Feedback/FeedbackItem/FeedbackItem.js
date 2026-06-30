import "./FeedbackItem.scss";

const FeedbackItem = ({ item }) => {
    return (
        <figure className="feedback-item">
            <blockquote className="feedback-item__content">
                <p>{item.feedback}</p>
            </blockquote>
            <figcaption className="feedback-item__reporter">
                <img
                    src={item.reporter.photoUrl}
                    alt={item.reporter.name}
                    className="feedback-item__avatar"
                />
                <div className="feedback-item__meta">
                    <span className="feedback-item__name">{item.reporter.name},</span>
                    <a
                        href={item.reporter.citeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="feedback-item__link"
                    >
                        <cite>{item.reporter.citeUrl.replace("https://www.", "")}</cite>
                    </a>
                </div>
            </figcaption>
        </figure>
    );
};

export default FeedbackItem;