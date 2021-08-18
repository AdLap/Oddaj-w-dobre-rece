import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import CollectBtn from './CollectBtn';

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