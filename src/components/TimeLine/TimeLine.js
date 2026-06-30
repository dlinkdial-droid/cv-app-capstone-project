import React from 'react';
import TimeLineItem from './TimeLineItem/TimeLineItem';
import Info from '../Info/Info';
import './TimeLine.scss';

const TIMELINE_DATA = [
    { id: 1, date: 2021, title: "Title 1", text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. " },
    { id: 2, date: 2019, title: "Title 2", text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. " },
    { id: 3, date: 2018, title: "Title 3", text: "Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud." },
    { id: 4, date: 2017, title: "Title 4", text: "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit." },
    { id: 5, date: 2016, title: "Title 5", text: "Et irure culpa ad proident labore excepteur elit dolore." },
    { id: 6, date: 2015, title: "Title 6", text: "Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud." },
    { id: 7, date: 2014, title: "Title 7", text: "Elit voluptate ad nostrud laboris." },
    { id: 8, date: 2013, title: "Title 8", text: "Et irure culpa ad proident labore excepteur elit dolore." },
    { id: 9, date: 2012, title: "Title 9", text: "Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud." }
];

const TimeLine = ({ title = "Education", data = TIMELINE_DATA }) => {
    const sortedData = [...data].sort((a, b) => b.date - a.date);

    return (
        <div className="timeline">
            <h2 className="timeline__title">{title}</h2>
            <div className="timeline__wrapper">
                <ul className="timeline__list">
                    {sortedData.map((event, index) => (
                        <TimeLineItem
                            key={event.id || index}
                            date={event.date}
                            isLast={index === sortedData.length - 1}
                        >
                            <Info
                                className="timeline-item__card"
                                title={event.title}
                                content={event.text}
                            />
                        </TimeLineItem>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TimeLine;