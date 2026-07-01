import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PhotoBox from '../../components/PhotoBox/PhotoBox';
import Button from '../../components/Button/Button';
import './HomePage.scss';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <motion.div
            className="home-page"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
        >
            <div className="home-page__overlay">
                <PhotoBox userName="John Doe" className="photo-box--large" />

                <h1 className="home-page__title">Programmer. Creative. Innovator</h1>

                <p className="home-page__description">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                </p>
                <Button
                    text="Know more"
                    onClick={() => navigate('/inner')}
                />
            </div>
        </motion.div>
    );
};

export default HomePage;