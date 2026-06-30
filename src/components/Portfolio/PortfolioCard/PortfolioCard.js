import React from 'react';
import './PortfolioCard.scss';

const PortfolioCard = ({ imageUrl, title, description, linkUrl }) => {
    return (
        <div className="portfolio-card">
            <img src={imageUrl} alt={title} className="portfolio-card__img" />
            <div className="portfolio-card__overlay">
                <h3 className="portfolio-card__title">{title}</h3>
                <p className="portfolio-card__desc">{description}</p>
                <a href={linkUrl} className="portfolio-card__link">View source</a>
            </div>
        </div>
    );
};

export default PortfolioCard;