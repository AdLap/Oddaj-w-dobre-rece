import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const CollectFormTree = ({ prev, next, data }) => {
    const options = [
        '',
        'Poznań',
        'Warszawa',
        'Kraków',
        'Wrocław',
        'Katowice'
    ];

    const handleSubmit = values => {
        next(values)
    }

    return (
        <>
            <h2>Lokalizacja:</h2>
            <Formik
                initialValues={data}
                onSubmit={handleSubmit}
            >
                {({ values }) => (
                    <Form>
                        <Field as='select' name='localization'>
                            {options.map(option => (
                                <option value={option} key={option}>{option}</option>
                            ))}
                        </Field>

                        <button onClick={() => prev(values)}>Wstecz</button>
                        <button type='submit' onClick={() => next(values)}>Dalej</button>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default CollectFormTree;