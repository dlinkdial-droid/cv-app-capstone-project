import ExpertiseItem from "./ExpertiseItem/ExpertiseItem";
import "./Expertise.scss";

const Expertise = ({ title, data }) => {
    return (
        <section className="expertise">
            <h2 className="expertise__title">{title}</h2>
            <ul className="expertise-list">
                {data.map((item, index) => (
                    <ExpertiseItem key={index} item={item} />
                ))}
            </ul>
        </section>
    );
};

export default Expertise;