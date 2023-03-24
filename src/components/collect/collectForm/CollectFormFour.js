import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './CollectFormFour.module.scss'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import CollectBtn from './CollectBtn'

const CollectFormFour = ({ prev, data, next }) => {
	const handleSubmit = (values) => {
		next(values)
	}

	const validationSchema = Yup.object().shape({
		street: Yup.string()
			.min(2, 'Wpisz co najmniej dwa znaki')
			.required('Podaj nazwę ulicy'),
		city: Yup.string()
			.min(2, 'Wpisz co najmniej dwa znaki')
			.required('Wpisz miasto'),
		postCode: Yup.string()
			.matches(/^[0-9]{2}-[0-9]{3}$/, 'Nieprawidłowy kod pocztowy')
			.required('Wpisz kod pocztowy'),
		phone: Yup.string()
			.matches(/^[0-9]{9}$/, 'Nieprawidłowy nr telefonu')
			.required('Wpisz nr telefonu'),
		date: Yup.date().required('Podaj datę odbioru'),
		time: Yup.date().required('Podaj godzinę odbioru'),
		note: Yup.string().max(120, 'Wpisz maksymalnie 120 znaków').notRequired(),
	})

	return (
		<>
			<h2 data-collect-form-title>
				Podaj adres oraz termin odbioru rzecz przez kuriera
			</h2>
			<Formik
				initialValues={data}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ values }) => (
					<Form data-form-step-four>
						<div data-container-step-four>
							<h3 data-collect-form-subtitle>Adres odbioru:</h3>
							<label data-label-step-four htmlFor='street'>
								<div>Ulica</div>
								<Field name='street' data-input-step-four />
								<ErrorMessage
									data-error-step-four
									name='street'
									component='div'
									className='error'
								/>
							</label>
							<label data-label-step-four htmlFor='city'>
								<div>Miasto</div>
								<Field name='city' data-input-step-four />
								<ErrorMessage
									data-error-step-four
									name='city'
									component='div'
									className='error'
								/>
							</label>
							<label data-label-step-four htmlFor='postCode'>
								<div>
									Kod
									<br />
									pocztowy
								</div>
								<Field name='postCode' data-input-step-four />
								<ErrorMessage
									data-error-step-four
									name='postCode'
									component='div'
									className='error'
								/>
							</label>
							<label data-label-step-four htmlFor='phone'>
								<div>
									Numer
									<br />
									telefonu
								</div>
								<Field name='phone' data-input-step-four />
								<ErrorMessage
									data-error-step-four
									name='phone'
									component='div'
									className='error'
								/>
							</label>
						</div>
						<div data-container-step-four>
							<h3 data-collect-form-subtitle>Termin odbioru:</h3>
							<label data-label-step-four htmlFor='date'>
								<div>Data</div>
								<Field name='date' data-input-step-four />
								<ErrorMessage
									data-error-step-four
									name='date'
									component='div'
									className='error'
								/>
							</label>
							<label data-label-step-four htmlFor='time'>
								<div>Godzina</div>
								<Field name='time' data-input-step-four />
								<ErrorMessage
									data-error-step-four
									name='time'
									component='div'
									className='error'
								/>
							</label>
							<label data-label-step-four htmlFor='note'>
								<div>
									Uwagi dla
									<br />
									kuriera
								</div>
								<Field
									data-input-step-four='textarea'
									name='note'
									as='textarea'
									rows='4'
								/>
								<ErrorMessage
									data-error-step-four
									name='note'
									component='div'
									className='error'
								/>
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
	)
}

export default CSSModules(CollectFormFour, styles)
