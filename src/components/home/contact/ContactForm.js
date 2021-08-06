import React from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
// import styles from './ContactForm.module.scss';
// import CSSModules from 'react-css-modules';


const ContactForm = () => {
    const styleForm = {
        border: '1px solid red',
        width: '528px',
        height: '327px',
        marginTop: '128px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    const styleInputBox = {
        display: 'flex'
    }

    const styleInput = {
        width: '50%'
    }

    const styleTextArea = {
        width: '100%'
    }

    return (
        <Formik
            initialValues={{ name: '', email: '', msg: '' }}
            onSubmit={values => alert(JSON.stringify(values))}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(2, 'Wpisz imię dłuższe niż dwa znaki')
                    .required('Podaj imię'),
                email: Yup.string()
                    .email('Nieprawidłowy adres email')
                    .required('Podaj adres email'),
                msg: Yup.string()
                    .min(5, 'Wiadomość powinna być dłuższa niż 5 znaków')
                    .required('Wpisz wiadomość')
            },
            )}
        >
            {
                ({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit} style={styleForm}>
                        <label htmlFor='name'>Wpisz swoje imię</label>
                        <Field name='name' type='text' style={styleInput} />
                        <ErrorMessage name='name' component='div' />

                        <label htmlFor='email'>Podaj swój adres email</label>
                        <Field name='email' type='email' style={styleInput} />
                        <ErrorMessage name='email' component='div' />

                        <label htmlFor='msg'>Wpisz wiadomość</label>
                        <Field name='msg' type='textarea' style={styleTextArea} />
                        <ErrorMessage name='msg' component='div' />

                        <button type='submit'>Wyślij</button>
                    </form>
                )
            }
        </Formik>
    );
}

export default ContactForm;