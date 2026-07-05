import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TimeLineItem from './TimeLineItem/TimeLineItem';
import Info from '../Info/Info';
import { fetchEducations } from '../../store/thunks/educationThunks';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import './TimeLine.scss';

const TimeLine = () => {
    const dispatch = useDispatch();

    // Достаем данные из стора
    const { items: educations, status, error } = useSelector((state) => state.education);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchEducations());
        }
    }, [status, dispatch]);

    // 1. Состояние загрузки (Ранний возврат)
    if (status === 'loading') {
        return (
            <div className="timeline">
                <h2 className="timeline__title">Education</h2>
                <Loader />
            </div>
        );
    }

    if (status === 'failed') {
        return (
            <div className="timeline">
                <h2 className="timeline__title">Education</h2>
                <Error message={error} />
            </div>
        );
    }

    const sortedData = [...(educations || [])].sort((a, b) => Number(b.date) - Number(a.date));

    return (
        <div className="timeline">
            <h2 className="timeline__title">Education</h2>
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