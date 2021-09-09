import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import CollectBtn from './CollectBtn';

const CollectFormOne = ({ next, data }) => {
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
                                <span
                                    className={values.type.includes(option) ? 'collect__form__one__label__span-active'
                                        : 'collect__form__one__label__span'}
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
