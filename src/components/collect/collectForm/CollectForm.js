import React, { useState } from 'react'
import CSSModules from 'react-css-modules'
import styles from './CollectForm.module.scss'
import CollectFormInfo from './CollectFormInfo'
import CollectFormOne from './CollectFormOne'
import CollectFormTwo from './CollectFormTwo'
import CollectFormThree from './CollectFormThree'
import CollectFormFour from './CollectFormFour'
import CollectFormSummary from './CollectFormSummary'
import CollectFormThanks from './CollectFormThanks'

const CollectForm = () => {
	const [currStep, setCurrStep] = useState(0)

	const [title] = useState([
		'Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.',
		'Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.',
		'Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.',
		'Podaj adres oraz termin odbioru rzeczy.',
	])

	const [data, setData] = useState({
		type: '',
		bags: '',
		localization: '',
		helpGroups: [],
		localizationSpecific: '',
		street: '',
		city: '',
		postCode: '',
		phone: '',
		date: '',
		time: '',
		note: '',
	})

	const handleNextStep = (newData) => {
		setData((data) => ({ ...data, ...newData }))
		setCurrStep((step) => step + 1)
	}

	const handlePrevStep = (newData) => {
		setData((data) => ({ ...data, ...newData }))
		setCurrStep((step) => step - 1)
	}

	const handleSubmit = (formData) => {
		alert(JSON.stringify(formData))
		setData({
			type: '',
			bags: '',
			localization: '',
			helpGroups: [],
			localizationSpecific: '',
			street: '',
			city: '',
			postCode: '',
			phone: '',
			date: '',
			time: '',
			note: '',
		})
		setCurrStep((step) => step + 1)
	}

	const steps = [
		<CollectFormOne next={handleNextStep} data={data} />,
		<CollectFormTwo prev={handlePrevStep} next={handleNextStep} data={data} />,
		<CollectFormThree
			prev={handlePrevStep}
			next={handleNextStep}
			data={data}
		/>,
		<CollectFormFour prev={handlePrevStep} next={handleNextStep} data={data} />,
		<CollectFormSummary
			prev={handlePrevStep}
			next={handleSubmit}
			data={data}
		/>,
		<CollectFormThanks />,
	]

	console.log('data::', data)

	return (
		<section>
			{currStep < 4 && <CollectFormInfo text={title[currStep]} />}
			<div styleName='container'>
				{currStep < 4 && (
					<div styleName='page'>
						Krok {currStep + 1}/4
					</div>
				)}
				<div styleName='step' className='container-main'>{steps[currStep]}</div>
			</div>
		</section>
	)
}

export default CSSModules(CollectForm, styles)
