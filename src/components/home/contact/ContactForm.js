import React, { useState } from 'react'
import CSSModules from 'react-css-modules'
import styles from './ContactForm.module.scss'
import { ErrorMessage, Field, Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import ContactFormSuccess from './ContactFormSuccess'

const ContactForm = () => {
	const [success, setSuccess] = useState(false)

	return (
		<>
			{success && <ContactFormSuccess />}
			<Formik
				initialValues={{ name: '', email: '', message: '' }}
				onSubmit={(values) => {
					axios
						.post('https://fer-api.coderslab.pl/v1/portfolio/contact', values, {
							headers: {
								'Content-Type': 'application/json',
							},
						})
						.then((resp) => {
							if (resp.status === 200) {
								setSuccess(true)
							}
						})
						.catch((error) => alert(error))
				}}
				validateOnChange={false}
				validateOnBlur={false}
				validationSchema={Yup.object().shape({
					name: Yup.string()
						.matches(/^[aA-zZ]+$/, 'Imię nie powinno zawierać spacji i cyfr')
						.min(2, 'Imię musi mieć co najmniej 2 znaki')
						.required('Podane imię jest nieprawidłowe'),
					email: Yup.string()
						.email('Nieprawidłowy adres email')
						.required('Wpisz adres email'),
					message: Yup.string()
						.min(120, 'Wiadomość musi mieć co najmniej 120 znaków')
						.required('Wiadomość nie może być pusta'),
				})}
			>
				{({ handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<div>
							<label htmlFor='name'>
								Wpisz swoje imię
								<Field name='name' type='text' placeholder='Imię' />
								<ErrorMessage data-error name='name' component='div' />
							</label>

							<label htmlFor='email'>
								Wpisz swój email
								<Field name='email' type='email' placeholder='abc@xyz.pl' />
								<ErrorMessage data-error name='email' component='div' />
							</label>
						</div>

						<label htmlFor='message'>
							Wpisz swoją wiadomość
							<Field
								name='message'
								as='textarea'
								rows='4'
								placeholder='Lorem ipsum dolor sit amet'
							/>
							<ErrorMessage data-error name='message' component='div' />
						</label>

						<button type='submit'>Wyślij</button>
					</form>
				)}
			</Formik>
		</>
	)
}

export default CSSModules(ContactForm, styles)
