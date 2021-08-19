import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import CollectBtn from './CollectBtn';
import CollectSelect from './CollectSelect';

const CollectFormTwo = ({ prev, next, data }) => {
    const [isActive, setIsActive] = useState(false)
    const options = [1, 2, 3, 4, 5];

    const handleSubmit = values => {
        next(values)
    }

    const handleActive = () => {
        setIsActive(!isActive);
    }


    return (
        <>
            <h2 className='collect__form__title'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
            <Formik
                initialValues={data}
                onSubmit={handleSubmit}
            >
                {({ values }) => (
                    <Form className='collect__form__two' >
                        <div className='collect__form__two__box'>
                            <span className='collect__form__two__label'>Liczba 60l worków:</span>
                            {/* <CollectSelect options={options} field={values.bags} name='bags' /> */}
                            <div className='collect__form__two__select'>
                                {values.bags > 0 ? values.bags : '— wybierz —'}
                                <div
                                    className={isActive ? 'collect__form__two__select__arrow-active' : 'collect__form__two__select__arrow'}
                                    onClick={() => handleActive(true)}
                                >
                                    {null}
                                </div>
                                <ul
                                    className={isActive ? 'collect__form__two__select__options-active' : 'collect__form__two__select__options'}
                                >
                                    {options.map(option => (
                                        <li
                                            className='collect__form__two__select__options__item'
                                            key={option}
                                            value={option}
                                            onClick={e => { values.bags = e.target.value; handleActive(false) }}   //To raczej trzeba zmienić, nie podoba mi się
                                            name='bags'
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
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

export default CollectFormTwo;