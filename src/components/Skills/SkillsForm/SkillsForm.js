import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { addSkill, updateSkill } from '../../../store/thunks/skillsThunks';
import './SkillsForm.scss';
import Button from '../../Button/Button';

const SkillsForm = ({ onClose }) => {
    const dispatch = useDispatch();
    const reduxSkills = useSelector((state) => state.skills.items) || [];

    const formik = useFormik({
        initialValues: { name: '', range: '' },
        validateOnMount: true,
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, 'Skill name must be more than 1 character')
                .required('Skill name is a required field'),
            range: Yup.number()
                .typeError(({ originalValue }) => `Skill range must be a 'number' type, but the current type is NAN and value is ${originalValue || "empty"}`)
                .min(10, 'Skill range must be greater than or equal to 10')
                .max(100, 'Skill range must be less than or equal to 100')
                .required('Skill range is a required field')
        }),
        onSubmit: (values, { resetForm, setSubmitting }) => {
            let localSkills = [];
            try {
                const localData = localStorage.getItem('skills');
                localSkills = localData ? JSON.parse(localData) : [];
            } catch (e) {
                console.error('Ошибка чтения из localStorage:', e);
            }

            const allSkills = [...reduxSkills, ...localSkills];

            const existingSkill = allSkills.find(
                (skill) => skill.name && skill.name.trim().toLowerCase() === values.name.trim().toLowerCase()
            );

            const actionToDispatch = existingSkill
                ? updateSkill({ id: existingSkill.id, name: existingSkill.name, range: Number(values.range) })
                : addSkill({ name: values.name, range: Number(values.range) });

            dispatch(actionToDispatch)
                .unwrap()
                .then(() => {
                    resetForm();
                    if (onClose) onClose();
                })
                .catch((err) => {
                    console.error('Ошибка при сохранении скилла:', err);
                })
                .finally(() => {
                    setSubmitting(false);
                });
        }
    });

    const showErrors = formik.dirty || formik.touched.name || formik.touched.range;

    return (
        <motion.div
            key="skills-form-dynamic-wrapper"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
                duration: 0.7,
                ease: [0.04, 0.62, 0.23, 0.98]
            }}
            style={{ overflow: 'hidden', width: '100%', minHeight: 0 }}
        >

            <div style={{ paddingBottom: '2.5rem', width: '100%' }}>
                <form onSubmit={formik.handleSubmit} className="skills-form" noValidate>
                    {/* Ряд поля: Skill name */}
                    <div className="skills-form__row">
                        <label htmlFor="name" className="skills-form__label">Skill name</label>
                        <div className="skills-form__input-wrapper">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter skill name"
                                className={`skills-form__input ${showErrors && formik.errors.name
                                    ? 'skills-form__input--error'
                                    : ''
                                    }`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                            {showErrors && formik.errors.name && (
                                <div className="skills-form__error">{formik.errors.name}</div>
                            )}
                        </div>
                    </div>

                    <div className="skills-form__row">
                        <label htmlFor="range" className="skills-form__label">Skill range</label>
                        <div className="skills-form__input-wrapper">
                            <input
                                id="range"
                                name="range"
                                type="text"
                                placeholder="Enter skill range"
                                className={`skills-form__input ${showErrors && formik.errors.range ? 'skills-form__input--error' : ''}`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.range}
                            />
                            {showErrors && formik.errors.range && (
                                <div className="skills-form__error">{formik.errors.range}</div>
                            )}
                        </div>
                    </div>

                    <div className="skills-form__actions">
                        <Button
                            type="submit"
                            className="skills-form__submit-btn"
                            disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}
                            text="Add skill"
                        />
                    </div>
                </form>
            </div>
        </motion.div>

    );
};

export default SkillsForm;