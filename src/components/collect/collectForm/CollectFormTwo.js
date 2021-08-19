import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import CollectBtn from './CollectBtn';
import CollectSelect from './CollectSelect';

const CollectFormTwo = ({ prev, next, data }) => {
    const options = [1, 2, 3, 4, 5];

    const handleSubmit = values => {
        next(values)
    }

    const handleChange = (e) => {
        console.log(e.target.value);
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
                            <div className='collect__form__two__select'>
                                <div className='collect__form__two__select__arrow'>{null}</div>
                                <ul className='collect__form__two__select__options-active'>
                                    {options.map(option => (
                                        <li
                                            className='collect__form__two__select__options__item'
                                            key={option}
                                            value={option}
                                            onClick={e => values.bags = e.target.value}
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