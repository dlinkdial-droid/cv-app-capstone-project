import { useNavigate } from 'react-router-dom';
import PhotoBox from '../../components/PhotoBox/PhotoBox';
import Button from '../../components/Button/Button';
import './HomePage.scss';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="home-page">
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
        </div>
    );
};

export default HomePage;