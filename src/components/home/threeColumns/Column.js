import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Column.module.scss'

const Column = ({ number, subtitle, description }) => {
	return (
		<div styleName='column'>
			<div styleName='col'>
				<h2 styleName='number'>{number}</h2>
				<h3 styleName='subtitle'>{subtitle}</h3>
			</div>
			<span styleName='description'>{description}</span>
		</div>
	)
}

export default CSSModules(Column, styles)
