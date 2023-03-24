import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './CollectFormOne.module.scss'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import CollectBtn from './CollectBtn'

const CollectFormOne = ({ next, data }) => {
	const options = [
		'ubrania, które nadają się do ponownego użycia',
		'ubrania, do wyrzucenia',
		'zabawki',
		'książki',
		'inne',
	]

	const handleSubmit = (values) => {
		next(values)
	}

	const validationSchema = Yup.object().shape({
		type: Yup.string().required('Zaznacz co chcesz oddać'),
	})

	return (
		<>
			<h2 data-collect-form-title>Zaznacz co chcesz odddać:</h2>
			<Formik
				initialValues={data}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				{({ values }) => (
					<Form data-form-step-one>
						{options.map((option) => (
							<label key={option} data-label-step-one>
								<Field
									type='radio'
									name='type'
									value={option}
									data-radio-step-one
								/>
								<span
									data-check-step-one={
										values.type.includes(option) ? 'active' : ''
									}
								>
									{null}
								</span>
								<span data-option-step-one>{option}</span>
							</label>
						))}
						<ErrorMessage
							name='type'
							component='div'
							className='error'
							data-error-step-one
						/>
						<div className='collect__form__btns'>
							<CollectBtn type='submit' text='Dalej' />
						</div>
					</Form>
				)}
			</Formik>
		</>
	)
}

export default CSSModules(CollectFormOne, styles)
