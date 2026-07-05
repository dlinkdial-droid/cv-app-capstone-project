import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExperience } from '../../store/thunks/experienceThunks'; // Проверь путь до танков
import ExpertiseItem from "./ExpertiseItem/ExpertiseItem";
import Loader from "../Loader/Loader"; // Проверь путь до Лоадера
import Error from "../Error/Error";   // Проверь путь до Ошибки
import "./Expertise.scss";

const Expertise = () => {
    const dispatch = useDispatch();

    // Забираем данные, статус и ошибку напрямую из слайса experience
    const { items: data, status, error } = useSelector((state) => state.experience);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchExperience());
        }
    }, [status, dispatch]);

    return (
        <section className="expertise">
            <h2 className="expertise__title">Experience</h2>

            {/* Логика экранов загрузки и ошибки */}
            {status === 'loading' && <Loader />}
            {status === 'failed' && <Error message={error} />}

            {/* Успешный рендер списка */}
            {status === 'succeeded' && (
                <ul className="expertise-list">
                    {data.map((item, index) => (
                        <ExpertiseItem key={item.id || index} item={item} />
                    ))}
                </ul>
            )}
        </section>
    );
};

export default Expertise;