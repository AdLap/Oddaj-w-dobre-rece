import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './HomeFourSteps.module.scss'
import Title from '../../utility/Title'
import Btn from '../../utility/Btn'
import StepsItem from './StepsItem'
import { steps } from '../../../data/steps'

const HomeFourSteps = () => {
	return (
		<section styleName='steps' id='info'>
			<Title text='Wystarczą 4 proste kroki' />
			<div styleName='wrapper'>
				<div styleName='container' className='container-main'>
					{steps.map((step) => (
						<StepsItem
							key={step.id}
							img={step.img}
							title={step.title}
							description={step.description}
						/>
					))}
				</div>
			</div>
			<Btn path='/logowanie' text={'oddaj\nrzeczy'} />
		</section>
	)
}

export default CSSModules(HomeFourSteps, styles)
