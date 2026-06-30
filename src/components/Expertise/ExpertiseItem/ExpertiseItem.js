import './ExpertiseItem.scss'

const ExpertiseItem = ({ item }) => {
    return (
        <li className="expertise-item">
            <div className="expertise-item__sidebar">
                <strong className="expertise-item__company">{item.info.company}</strong>
                <span className="expertise-item__date">{item.date}</span>
            </div>
            <div className="expertise-item__main">
                <h3 className="expertise-item__job">{item.info.job}</h3>
                <p className="expertise-item__description">{item.info.description}</p>
            </div>
        </li>
    );
};

export default ExpertiseItem;