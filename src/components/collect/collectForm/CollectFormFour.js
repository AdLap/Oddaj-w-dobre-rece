import React from 'react';
import { Field, Form, Formik } from 'formik';
import CollectBtn from './CollectBtn';

const CollectFormFour = ({ prev, data, next }) => {
    const handleSubmit = values => {
        next(values);
    }

    return (
        <Formik
            initialValues={data}
            onSubmit={handleSubmit}
        >
            {({values}) => (
                <Form>
                    <div>
                        <h3>Adres odbioru:</h3>
                        <label> Ulica
                            <Field name='street' />
                        </label>
                        <label>Miasto
                            <Field name='city' />
                        </label>
                        <label>Kod pocztowy
                            <Field name='postCode' />
                        </label>
                        <label>Numer telefonu
                            <Field name='phone' />
                        </label>
                    </div>
                    <div>
                        <h3>Termin odbioru:</h3>
                        <label>data
                            <Field name='date' />
                        </label>
                        <label>Godzina
                            <Field name='time' />
                        </label>
                        <label>Uwagi dla kuriera
                            <Field name='note' as='textarea' />
                        </label>
                    </div>
                    <div className='collect__form__btns'>
                            <CollectBtn onClick={() => prev(values)} text='Wstecz' />
                            <CollectBtn type='submit' text='Dalej' />
                        </div>
                </Form>
            )}
        </Formik>
    );
}

export default CollectFormFour;
