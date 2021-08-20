import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
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

    return (
        <>
            <h2 className='collect__form__title'>Lokalizacja:</h2>
            <Formik
                initialValues={data}
                onSubmit={handleSubmit}
            >
                {({ values }) => (
                    <Form className='collect__form__tree' >
                        <div className='collect__form__tree__box'>
                            <div className='collect__form__select'>
                                {values.localization ? values.localization : '— wybierz —'}
                                <div
                                    className={isActive ? 'collect__form__select__arrow-active' : 'collect__form__select__arrow'}
                                    onClick={() => handleActive(true)}
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
                                            onClick={() => { values.localization = option; handleActive(false); }}   //To raczej trzeba zmienić, nie podoba mi się
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='collect__form__groups'>
                                <h3 className='collect__form__tree__title'>Komu chcesz pomóc?</h3>
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
                            </div>
                            <div className='collect__form__local'>
                                <h3 className='collect__form__tree__title'>
                                    Wpisz nazwę konkretnej organizacji (opcjonalnie)
                                </h3>
                                <Field name='localizationSpecific'
                                    className='collect__form__local__input'
                                />
                            </div>
                        </div>
                        <div className='collect__form__btns'>
                            <CollectBtn onClick={() => prev(values)} text='Wstecz' />
                            <CollectBtn type='submit' onClick={() => next(values)} text='Dalej' />
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default CollectFormTree;