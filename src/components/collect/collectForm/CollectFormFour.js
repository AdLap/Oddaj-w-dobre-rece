import React from 'react';
import { Field, Form, Formik } from 'formik';
import CollectBtn from './CollectBtn';

const CollectFormFour = ({ prev, data, next }) => {
    const handleSubmit = values => {
        next(values);
    }

    return (
        <>
            <h2 className='collect__form__title'>Podaj adres oraz termin odbioru rzecz przez kuriera</h2>

            <Formik
                initialValues={data}
                onSubmit={handleSubmit}
            >
                {({ values }) => (
                    <Form className='collect__form__four'>
                        <div className='collect__form__four__container'>
                            <h3 className='collect__form__subtitle'>Adres odbioru:</h3>
                            <label className='collect__form__four__label' htmlFor='street'>
                                <div>Ulica</div>
                                <Field name='street' className='collect__form__four__input' />
                            </label>
                            <label className='collect__form__four__label' htmlFor='city'>
                                <div>Miasto</div>
                                <Field name='city' className='collect__form__four__input' />
                            </label>
                            <label className='collect__form__four__label' htmlFor='postCode'>
                                <div>Kod<br/>pocztowy</div>
                                <Field name='postCode' className='collect__form__four__input' />
                            </label>
                            <label className='collect__form__four__label' htmlFor='phone'>
                                <div>Numer<br/>telefonu</div>
                                <Field name='phone' className='collect__form__four__input' />
                            </label>

                        </div>
                        <div className='collect__form__four__container'>
                            <h3 className='collect__form__subtitle'>Termin odbioru:</h3>
                            <label className='collect__form__four__label' htmlFor='date'>
                                <div>Data</div>
                                <Field name='date' className='collect__form__four__input' />
                            </label>
                            <label className='collect__form__four__label' htmlFor='time'>
                                <div>Godzina</div>
                                <Field name='time' className='collect__form__four__input' />
                            </label>
                            <label className='collect__form__four__label' htmlFor='note'>
                                <div>Uwagi dla<br/>kuriera</div>
                                <Field name='note' as='textarea' rows='4' className='collect__form__four__input textarea'/>
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
