import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import CollectBtn from './CollectBtn';

const CollectFormOne = ({ next, data }) => {
    const [isChecked, setIsChecked] = useState(false);

    const options = [
        'ubrania, które nadają się do ponownego użycia',
        'ubrania, do wyrzucenia',
        'zabawki',
        'książki',
        'inne'
    ];

    const handleSubmit = values => {
        next(values)
    }

    const toggleChecked = e => {
        setIsChecked(!isChecked);
    }

    return (
        <>
            <h2 className='collect__form__title'>Zaznacz co chcesz odddać:</h2>
            <Formik
                initialValues={data}
                onSubmit={handleSubmit}
            >
                {({ values }) => (
                    <Form className='collect__form__one'>
                        {options.map(option => (
                            <label key={option} className='collect__form__one__label'>
                                <span className='collect__form__one__label__span'
                                >
                                    {null}
                                </span>
                                <Field
                                    type='radio'
                                    name='type'
                                    value={option}
                                    className='collect__form__one__label__radio'
                                />
                                {option}
                            </label>
                        ))}
                        <div className='collect__form__btns'>
                            <CollectBtn type='submit' text='Dalej' />
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default CollectFormOne;
