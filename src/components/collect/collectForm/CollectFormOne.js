import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

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
            <h2>Zaznacz co chcesz odddać</h2>
            <Formik
                initialValues={data}
                onSubmit={handleSubmit}
            >
                {({values}) => (
                    <Form>
                        {options.map((option, idx) => (
                            <label key={idx}>
                                <Field type='radio' name='things' value={option} />
                                {option}
                            </label>
                        ))}
                        <button type='submit' onClick={() => next(values)}>Dalej</button>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default CollectFormOne;
