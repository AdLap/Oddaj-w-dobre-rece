import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './StepItem.module.scss'

const StepsItem = ({ img, title, description }) => {
	return (
		<div styleName='col'>
			<div styleName='img'>
				<img styleName='pic' src={img} alt={img} />
			</div>
			<h3 styleName='title'>{title}</h3>
			<span styleName='description'>{description}</span>
		</div>
	)
}

export default CSSModules(StepsItem, styles)
