import React from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
    const styleForm = {
        width: '528px',
        height: '327px',
        marginTop: '128px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    const styleInputBox = {
        display: 'flex',
        gap: '16px'
    }

    const styleLabel = {
        fontFamily: '"Open Sans", sans-serif',
        fontWeight: '600',
        fontSize: '16px',
        color: '#3C3C3C',
        letterSpacing: '0',
        width: '100%'
    }

    const styleInput = {
        width: '100%',
        border: 'none',
        background: 'transparent',
        borderBottom: '.75px solid #3C3C3C',
        fontFamily: '"Open Sans", sans-serif',
        fontWeight: '400',
        fontSize: '18px',
        letterSpacing: '0',
        color: '#3C3C3C',
        marginTop: '12px'
    }

    const styleTextArea = {
        width: '100%',
        height: '97px',
        border: 'none',
        background: 'transparent',
        borderBottom: '.75px solid #3C3C3C',
        fontFamily: '"Open Sans", sans-serif',
        fontWeight: '400',
        fontSize: '18px',
        letterSpacing: '0',
        color: '#3C3C3C',
        marginTop: '12px',
        resize: 'none'
    }

    const styleBtn = {
        background: 'transparent',
        border: '.75px solid #3C3C3C',
        fontFamily: '"Open Sans", sans-serif',
        fotnSize: '18px',
        fontWeight: '300',
        letterSpacing: '0',
        color: '#000000',
        padding: '13px 52px',
        cursor: 'pointer',
        alignSelf: 'flex-end'
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
                    <form onSubmit={handleSubmit} style={styleForm} className='contact__form'>
                        <div style={styleInputBox}>
                            <label htmlFor='name' style={styleLabel}>Wpisz swoje imię
                                <Field
                                    name='name'
                                    type='text'
                                    style={styleInput}
                                    placeholder='Krzysztof' />
                                <ErrorMessage name='name' component='div' />
                            </label>

                            <label htmlFor='email' style={styleLabel}>Podaj swój adres email
                                <Field
                                    name='email'
                                    type='email'
                                    style={styleInput}
                                    placeholder='abc@xyz.pl' />
                                <ErrorMessage name='email' component='div' />
                            </label>
                        </div>

                        <label htmlFor='msg' style={styleLabel}>Wpisz wiadomość
                            <Field
                                name='msg'
                                as='textarea'
                                rows='4'
                                style={styleTextArea}
                                placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat.' />
                            <ErrorMessage name='msg' component='div' />
                        </label>

                        <button type='submit' style={styleBtn}>Wyślij</button>
                    </form>
                )
            }
        </Formik>
    );
}

export default ContactForm;
