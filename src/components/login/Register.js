import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import HomeHeader from '../home/header/HomeHeader';

const Register = () => {
    return (
        <section className='login'>
            <HomeHeader />
            <h1 className='login__title'>Załóż konto</h1>
            <div className='login__data'>

                <Formik
                    initialValues={{ email: '', password: '', password2: '' }}
                    onSubmit={values => {
                        alert(JSON.stringify(values))
                    }}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validationSchema={Yup.object().shape({
                        email: Yup
                            .string()
                            .email('Nieprawidłowy adres email')
                            .required('Email jest wymagany'),
                        password: Yup
                            .string()
                            // .password('Hasło jest za krótkie')
                            .min(6, 'Minimum 6 znaków')
                            .required('Musisz podać hasło'),
                        password2: Yup
                            .string()
                            .oneOf([Yup.ref('password'), null], 'Hasła muszą być takie same')
                            .required('Potwierdź hasło')
                    })}
                >
                    {
                        ({ handleSubmit }) => (
                            <form onSubmit={handleSubmit} className='login__data__form'>
                                <div className='login__data__form__box'>
                                    <label htmlFor='email' className='login__data__form__label'>Email
                                        <Field name='email' type='email' className='login__data__form__input' />
                                        <ErrorMessage name='email' component='div' className='login__data__form__error' />
                                    </label>
                                    <label htmlFor='password' className='login__data__form__label'>Hasło
                                        <Field name='password' type='password' className='login__data__form__input' />
                                        <ErrorMessage name='password' component='div' className='login__data__form__error' />
                                    </label>
                                    <label htmlFor='password2' className='login__data__form__label'>Hasło
                                        <Field name='password2' type='password' className='login__data__form__input' />
                                        <ErrorMessage name='password2' component='div' className='login__data__form__error' />
                                    </label>
                                </div>
                                <div div className='login__data__btn'>
                                    <button type='submit' className='login__data__btn__item'>Załóż konto</button>
                                    <Link to='/logowanie' className='login__data__btn__item'>Zaloguj się</Link>
                                </div>
                            </form>
                        )
                    }
                </Formik>
            </div>
        </section >
    )
}

export default Register;
