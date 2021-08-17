import { Field, Form, Formik } from 'formik';
import React from 'react';

const CollectFormFour = ({ prev, data }) => {
    console.log(data);
    return (
        <Formik
            initialValues={data}
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

                    <button onClick={() => prev(values)}>Wstecz</button>
                    <button type='submit'>Dalej</button>
                </Form>
            )}
        </Formik>
    );
}

export default CollectFormFour;
