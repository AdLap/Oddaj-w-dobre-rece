import React from 'react'
import { Link } from 'react-router-dom';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import HomeHeader from '../home/header/HomeHeader';

const LogIn = () => {
    return (
        <section className='login'>
            <HomeHeader />
            <h1 className='login__title'>Zaloguj się</h1>
            <div className='login__data'>

                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={values => {
                        alert(JSON.stringify(values))}}
                    validationSchema={Yup.object({
                        email: Yup
                            .string()
                            .email('Nieprawidłowy adres email')
                            .required('Email jest wymagany'),
                        password: Yup
                            .string()
                            // .password('Hasło jest za krótkie')
                            .min(6, 'Minimum 6 znaków')
                            .required('Musisz podać hasło')
                    })}
                >
                    {
                        ({ handleSubmit }) => (
                            <form onSubmit={handleSubmit} className='login__data__form'>
                                <label htmlFor='email' className='login__data__form__label'>Email
                                    <Field name='email' type='email' className='login__data__form__input' />
                                    <ErrorMessage name='email' component='div' />
                                </label>
                                <label htmlFor='password' className='login__data__form__label'>Hasło
                                    <Field name='password' type='password' className='login__data__form__input' />
                                    <ErrorMessage name='password' component='div' />
                                </label>
                                {/* TODO ostylować te btn */}
                                <div div className='login__data__btn'>
                                    <Link to='/rejestracja' className='login__data__btn__item'>Załóż konto</Link>
                                    <button type='submit' className='login__data__btn__item'>Zaloguj się</button>
                                </div>
                            </form>
                        )
                    }
                </Formik>


                {/* <form className='login__data__form'>
                    <label className='login__data__form__label'>
                        Email<br />
                        <input className='login__data__form__input' type='email' />
                    </label>
                    <label className='login__data__form__label'>
                        Hasło<br />
                        <input className='login__data__form__input' type='password' />
                    </label>
                </form> */}

            </div>
        </section >
    )
}

export default LogIn;
