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

    return (
        <>
            <h2>Zaznacz co chcesz odddać</h2>
            <Formik
                initialValues={data}
            >
                {({ values }) => (
                    <Form>
                        <label>
                            <Field type='radio' name='things' value={options[0]} checked={options[0]} />
                            {options[0]}
                        </label>
                        {options.map((option, idx) => {
                            <label htmlFor='things' key={idx}>
                                <Field type='radio' name='things' id={option} value={option} checked={option} />
                                {option}
                            </label>
                        })}
                        <button type='submit' onClick={() => next(values)}>Dalej</button>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default CollectFormOne;
