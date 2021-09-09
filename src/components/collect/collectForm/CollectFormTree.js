import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import CollectBtn from './CollectBtn';

const CollectFormTree = ({ prev, next, data }) => {
    const [isActive, setIsActive] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const optionsLocalization = [
        'Poznań',
        'Warszawa',
        'Kraków',
        'Wrocław',
        'Katowice'
    ];
    const optionsGroups = [
        'dzieciom',
        'samotnym matkom',
        'bezdomnym',
        'niepełnosprawnym',
        'osobom starszym'
    ]

    const handleSubmit = values => {
        next(values)
    }

    const handleActive = () => {
        setIsActive(!isActive);
    }

    const handleChangeCheckbox = (values, option) => {
        if (values.includes(option)) {
            const idx = values.indexOf(option);
            values.splice(idx, 1)
        } else {
            values.push(option)
        }
    }

    const toggleChecked = () => {
        setIsChecked(!isChecked)
    }

    const validationSchema = Yup.object().shape({
        localization: Yup
            .string()
            .required('Podaj lokalizację'),
        helpGroups: Yup
            .array()
            .min(1, 'Zaznacz co najmniej jedną grupę'),
        // localizationSpecific: Yup
        //     .string()
        //     .min(3, 'Nazwa musi mieć co najmniej trzy znaki')
        //     .required('Zaznacz komu chcesz pomóc, lub wpisz nazwę organizacji'),

        // localizationSpecific: Yup
        //     .mixed().when('helpGroups', {
        //         is: false,
        //         then: Yup.string().min(3, 'za krótko').required('Zaznacz komu chcesz pomóc, lub wpisz nazwę organizacji')
        //     })
    })

    return (
        <>
            <h2 className='collect__form__title'>Lokalizacja:</h2>
            <Formik
                initialValues={data}
                validateOnChange={true}
                validateOnBlur={true}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values }) => (
                    <Form className='collect__form__tree'>
                        <div className='collect__form__tree__box'>
                            <div className='collect__form__select'
                                onClick={() => handleActive(true)}
                            >
                                {values.localization ? values.localization : '— wybierz —'}
                                <div
                                    className={isActive ? 'collect__form__select__arrow-active' : 'collect__form__select__arrow'}
                                >
                                    {null}
                                </div>
                                <ul
                                    className={isActive ? 'collect__form__select__options-active tree__select' : 'collect__form__select__options tree__select'}
                                >
                                    {optionsLocalization.map(option => (
                                        <li
                                            className='collect__form__select__options__item'
                                            key={option}
                                            value={option}
                                            name='localization'
                                            onClick={() => { values.localization = option; handleActive(false); }}
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                                <ErrorMessage name='localization' component='div' className='collect__error__msg' />
                            </div>
                            <div className='collect__form__groups'>
                                <h3 className='collect__form__subtitle'>Komu chcesz pomóc?</h3>
                                <div className='collect__form__groups__checkbox'>
                                    {optionsGroups.map(option => (
                                        <span
                                            className={values.helpGroups.includes(option) ? 'collect__form__groups__checkbox__item-checked' : 'collect__form__groups__checkbox__item'}
                                            key={option}
                                            value={option}
                                            name='helpGroups'
                                            onClick={() => {
                                                handleChangeCheckbox(values.helpGroups, option);
                                                toggleChecked();
                                            }}
                                        >
                                            {option}
                                        </span>
                                    ))}
                                </div>
                                <ErrorMessage name='helpGroups' component='div' className='collect__error__msg' />
                            </div>
                            <div className='collect__form__local'>
                                <h3 className='collect__form__subtitle'>
                                    Wpisz nazwę konkretnej organizacji (opcjonalnie)
                                </h3>
                                <Field name='localizationSpecific'
                                    className='collect__form__local__input'
                                />
                                <ErrorMessage name='localizationSpecific' component='div' className='collect__error__msg' />
                            </div>
                        </div>
                        <div className='collect__form__btns'>
                            <CollectBtn onClick={() => prev(values)} text='Wstecz' />
                            <CollectBtn type='submit' text='Dalej' />
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default CollectFormTree;