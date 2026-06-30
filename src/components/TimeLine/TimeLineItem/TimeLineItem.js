import React from 'react';
import './TimeLineItem.scss';

const TimeLineItem = ({ date, isLast, children }) => {
    return (
        <li className="timeline-item">
            <div className="timeline-item__side">
                <span className="timeline-item__date">{date}</span>
                {!isLast && <div className="timeline-item__line" />}
            </div>

            <div className="timeline-item__content">
                {children}
            </div>
        </li>
    );
};

export default TimeLineItem;