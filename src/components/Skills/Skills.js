import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { fetchSkills } from '../../store/thunks/skillsThunks';
import SkillsForm from './SkillsForm/SkillsForm';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons';
import './Skills.scss';

const Skills = () => {
    const dispatch = useDispatch();
    const { items: skills, status, error } = useSelector((state) => state.skills);
    const [isEditing, setIsEditing] = useState(false);

    const toggleEditing = () => setIsEditing(prev => !prev);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchSkills());
        }
    }, [status, dispatch]);

    return (
        <div className="skills">
            <div className="skills__header">
                <h2 className="skills__title">Skills</h2>

                <Button
                    icon={isEditing ? faXmark : faPen}
                    text={isEditing ? "Close edit" : "Open edit"}
                    onClick={toggleEditing}
                    className="skills__toggle-button"
                />
            </div>

            {status === 'loading' && <Loader />}
            {status === 'failed' && <Error message={error} />}

            {status === 'succeeded' && (
                <>
                    {/* {isEditing && <SkillsForm />} */}

                    <AnimatePresence>
                        {isEditing && (
                            <SkillsForm />
                        )}
                    </AnimatePresence>

                    <div className="skills__list">
                        {skills.map((skill, index) => (
                            <div className="skills__item" key={skill.id || index}>
                                <div className="skills__progress-bar">
                                    <div
                                        className="skills__progress-fill"
                                        style={{ width: `${skill.range}%` }}
                                    >
                                        <span className="skills__name">{skill.name}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="skills__timeline">
                        <div className="skills__timeline-line"></div>
                        <div className="skills__timeline-ticks">
                            <div className="skills__timeline-tick skills__timeline-tick--first">
                                <span>Beginner</span>
                            </div>
                            <div className="skills__timeline-tick">
                                <span>Proficient</span>
                            </div>
                            <div className="skills__timeline-tick">
                                <span>Expert</span>
                            </div>
                            <div className="skills__timeline-tick skills__timeline-tick--last">
                                <span>Master</span>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Skills;