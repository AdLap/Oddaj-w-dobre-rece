import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const CollectFormTwo = ({ prev, next, data }) => {
    const options = ['', 1, 2, 3, 4, 5];

    const handleSubmit = values => {
        next(values)
    }

    return (
        <>
            <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
            <Formik
                initialValues={data}
                onSubmit={handleSubmit}
            >
                {({ values }) => (
                    <Form>
                        <Field as='select' name='bags'>
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

export default CollectFormTwo;