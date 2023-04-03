import React, { useState } from 'react'
import CSSModules from 'react-css-modules'
import styles from './CollectFormThree.module.scss'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import CollectButtons from '../CollectButtons'

const CollectFormThree = ({ prev, next, data }) => {
	const [isActive, setIsActive] = useState(false)
	const [isChecked, setIsChecked] = useState(false)
	const optionsLocalization = [
		'Poznań',
		'Warszawa',
		'Kraków',
		'Wrocław',
		'Katowice',
	]
	const optionsGroups = [
		'dzieciom',
		'samotnym matkom',
		'bezdomnym',
		'niepełnosprawnym',
		'osobom starszym',
	]

	const handleSubmit = (values) => {
		next(values)
	}

	const handleActive = () => {
		setIsActive(!isActive)
	}

	const handleChangeCheckbox = (values, option) => {
		if (values.includes(option)) {
			const idx = values.indexOf(option)
			values.splice(idx, 1)
		} else {
			values.push(option)
		}
	}

	const toggleChecked = () => {
		setIsChecked(!isChecked)
	}

	const validationSchema = Yup.object().shape({
		localization: Yup.string().required('Podaj lokalizację'),
		helpGroups: Yup.array().min(1, 'Zaznacz co najmniej jedną grupę'),
		localizationSpecific: Yup.string()
			.min(2, 'Nazwa musi mieć co najmniej dwa znaki')
			.max(50, 'Zbyt długa nazwa')
			.optional(),
	})

	return (
		<>
			<h2 data-collect-form-title>Lokalizacja:</h2>
			<Formik
				initialValues={data}
				validateOnChange={true}
				validateOnBlur={true}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ values }) => (
					<Form data-form-step-three>
						<div data-box-step-three>
							<div data-collect-form-select onClick={() => handleActive(true)}>
								{values.localization ? values.localization : '— wybierz —'}
								<div data-collect-form-select-arrow={isActive ? 'active' : ''}>
									{null}
								</div>
								<ul data-collect-form-select-options={isActive ? 'active' : ''}>
									{optionsLocalization.map((option) => (
										<li
											data-collect-form-select-options-item
											key={option}
											value={option}
											name='localization'
											onClick={() => {
												values.localization = option
												handleActive(false)
											}}
										>
											{option}
										</li>
									))}
								</ul>
								<ErrorMessage
									data-error-step-three
									name='localization'
									component='div'
									className='error'
								/>
							</div>
							<div data-groups-step-three>
								<h3 data-collect-form-subtitle>Komu chcesz pomóc?</h3>
								<div data-checkbox-step-three>
									{optionsGroups.map((option) => (
										<span
											data-checkbox-item-step-three={
												values.helpGroups.includes(option) ? 'checked' : ''
											}
											key={option}
											value={option}
											name='helpGroups'
											onClick={() => {
												handleChangeCheckbox(values.helpGroups, option)
												toggleChecked()
											}}
										>
											{option}
										</span>
									))}
								</div>
								<ErrorMessage
									data-error-step-three
									name='helpGroups'
									component='div'
									className='error'
								/>
							</div>
							<div data-local-step-three>
								<h3 data-collect-form-subtitle>
									Wpisz nazwę konkretnej organizacji (opcjonalnie)
								</h3>
								<Field
									data-local-input-step-three
									name='localizationSpecific'
								/>
								<ErrorMessage
									data-error-step-three
									name='localizationSpecific'
									component='div'
									className='error'
								/>
							</div>
						</div>
						<CollectButtons prev={() => prev(values)} />
					</Form>
				)}
			</Formik>
		</>
	)
}

export default CSSModules(CollectFormThree, styles)
