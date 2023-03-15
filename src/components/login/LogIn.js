import React from 'react'
import { Link } from 'react-router-dom'
import { ErrorMessage, Field, Formik } from 'formik'
import * as Yup from 'yup'

const LogIn = () => {
	return (
		<section className='login'>
			<h1 className='login__title'>Zaloguj się</h1>
			<div className='login__data'>
				<Formik
					initialValues={{ email: '', password: '' }}
					onSubmit={(values) => {
						alert(JSON.stringify(values))
					}}
					validateOnChange={false}
					validateOnBlur={false}
					validationSchema={Yup.object().shape({
						email: Yup.string()
							.email('Nieprawidłowy adres email')
							.required('Email jest wymagany'),
						password: Yup.string()
							.min(6, 'Minimum 6 znaków')
							.required('Musisz podać hasło'),
					})}
				>
					{({ handleSubmit }) => (
						<form onSubmit={handleSubmit} className='login__data__form'>
							<div className='login__data__form__box'>
								<label htmlFor='email' className='login__data__form__label'>
									Email
									<Field
										name='email'
										type='email'
										className='login__data__form__input'
									/>
									<ErrorMessage
										name='email'
										component='div'
										className='login__data__form__error'
									/>
								</label>
								<label htmlFor='password' className='login__data__form__label'>
									Hasło
									<Field
										name='password'
										type='password'
										className='login__data__form__input'
									/>
									<ErrorMessage
										name='password'
										component='div'
										className='login__data__form__error'
									/>
								</label>
							</div>
							<div className='login__data__btn'>
								<Link to='/rejestracja' className='login__data__btn__item'>
									Załóż konto
								</Link>
								<button type='submit' className='login__data__btn__item'>
									Zaloguj się
								</button>
							</div>
						</form>
					)}
				</Formik>
			</div>
		</section>
	)
}

export default LogIn
