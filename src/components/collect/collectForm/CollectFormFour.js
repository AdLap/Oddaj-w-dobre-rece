import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import CollectBtn from './CollectBtn';

const CollectFormFour = ({ prev, data, next }) => {
    const handleSubmit = values => {
        next(values);
    }

    const validationSchema = Yup.object().shape({
        street: Yup.string().min(2, 'Wpisz co najmniej dwa znaki').required('Podaj nazwę ulicy'),
        city: Yup.string().min(2, 'Wpisz co najmniej dwa znaki').required('Wpisz miasto'),
        postCode: Yup.string().matches(/^[0-9]{2}-[0-9]{3}$/, 'Nieprawidłowy kod pocztowy').required('Wpisz kod pocztowy'),
        phone: Yup.string().matches(/^[0-9]{9}$/, 'Nieprawidłowy nr telefonu').required('Wpisz nr telefonu'),
        date: Yup.date().required('Podaj datę odbioru'),
        time: Yup.date().required('Podaj godzinę odbioru'),
        note: Yup.string().max(120, 'Wpisz maksymalnie 120 znaków').notRequired()
    })

    return (
        <>
            <h2 className='collect__form__title'>Podaj adres oraz termin odbioru rzecz przez kuriera</h2>
            <Formik
                initialValues={data}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values }) => (
                    <Form className='collect__form__four'>
                        <div className='collect__form__four__container'>
                            <h3 className='collect__form__subtitle'>Adres odbioru:</h3>
                            <label className='collect__form__four__label' htmlFor='street'>
                                <div>Ulica</div>
                                <Field name='street' className='collect__form__four__input' />
                                <ErrorMessage name='street' component='div' className='collect__error__msg' />
                            </label>
                            <label className='collect__form__four__label' htmlFor='city'>
                                <div>Miasto</div>
                                <Field name='city' className='collect__form__four__input' />
                                <ErrorMessage name='city' component='div' className='collect__error__msg' />
                            </label>
                            <label className='collect__form__four__label' htmlFor='postCode'>
                                <div>Kod<br />pocztowy</div>
                                <Field name='postCode' className='collect__form__four__input' />
                                <ErrorMessage name='postCode' component='div' className='collect__error__msg' />
                            </label>
                            <label className='collect__form__four__label' htmlFor='phone'>
                                <div>Numer<br />telefonu</div>
                                <Field name='phone' className='collect__form__four__input' />
                                <ErrorMessage name='phone' component='div' className='collect__error__msg' />
                            </label>

                        </div>
                        <div className='collect__form__four__container'>
                            <h3 className='collect__form__subtitle'>Termin odbioru:</h3>
                            <label className='collect__form__four__label' htmlFor='date'>
                                <div>Data</div>
                                <Field name='date' className='collect__form__four__input' />
                                <ErrorMessage name='date' component='div' className='collect__error__msg' />
                            </label>
                            <label className='collect__form__four__label' htmlFor='time'>
                                <div>Godzina</div>
                                <Field name='time' className='collect__form__four__input' />
                                <ErrorMessage name='time' component='div' className='collect__error__msg' />
                            </label>
                            <label className='collect__form__four__label' htmlFor='note'>
                                <div>Uwagi dla<br />kuriera</div>
                                <Field name='note' as='textarea' rows='4' className='collect__form__four__input textarea' />
                                <ErrorMessage name='note' component='div' className='collect__error__msg' />
                            </label>
                        </div>
                        <div className='collect__form__btns'>
                            <CollectBtn onClick={() => prev(values)} text='Wstecz' />
                            <CollectBtn type='submit' text='Dalej' />
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default CollectFormFour;
