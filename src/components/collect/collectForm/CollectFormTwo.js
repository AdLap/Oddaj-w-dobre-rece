import React, { useState } from 'react'
import CSSModules from 'react-css-modules'
import styles from './CollectFormTwo.module.scss'
import { ErrorMessage, Form, Formik } from 'formik'
import * as Yup from 'yup'
import CollectBtn from './CollectBtn'
// import CollectSelect from './CollectSelect'; // TODO

const CollectFormTwo = ({ prev, next, data }) => {
	const [isActive, setIsActive] = useState(false)
	const options = [1, 2, 3, 4, 5]

	const handleSubmit = (values) => {
		next(values)
	}

	const handleActive = () => {
		setIsActive(!isActive)
	}

	const validationSchema = Yup.object().shape({
		bags: Yup.number().required('Wybierz ilość worków'),
	})

	return (
		<>
			<h2 data-collect-form-title>
				Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
			</h2>
			<Formik
				initialValues={data}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
				validateOnChange={true}
				validateOnBlur={true}
			>
				{({ values }) => (
					<Form data-form-step-two>
						<div data-box-step-two>
							<span data-label-step-two>Liczba 60l worków:</span>
							{/* <CollectSelect options={options} field={values.bags} name='bags' /> */}
							<div data-collect-form-select onClick={() => handleActive(true)}>
								{values.bags ? values.bags : '— wybierz —'}
								<div data-collect-form-select-arrow={isActive ? 'active' : ''}>
									{null}
								</div>
								<ul data-collect-form-select-options={isActive ? 'active' : ''}>
									{options.map((option) => (
										<li
											data-collect-form-select-options-item
											key={option}
											value={option}
											onClick={() => {
												values.bags = option
												handleActive(false)
											}}
											name='bags'
										>
											{option}
										</li>
									))}
								</ul>
								<ErrorMessage name='bags' component='div' className='error' />
							</div>
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

export default CSSModules(CollectFormTwo, styles)
