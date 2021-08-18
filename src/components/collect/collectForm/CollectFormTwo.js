import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import CollectBtn from './CollectBtn';

const CollectFormTwo = ({ prev, next, data }) => {
    const options = ['Wybierz', 1, 2, 3, 4, 5];

    const handleSubmit = values => {
        next(values)
    }

    return (
        <>
            <h2 className='collect__form__title'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
            <Formik
                initialValues={data}
                onSubmit={handleSubmit}
            >
                {({ values }) => (
                    <Form className='collect__form__two'>
                        <Field as='select' name='bags' className='collect__form__two__select'>
                            {options.map(option => (
                                <option
                                    value={option}
                                    key={option}
                                    className='collect__form__two__select-option'
                                >
                                    {option}
                                </option>
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

export default CollectFormTwo;