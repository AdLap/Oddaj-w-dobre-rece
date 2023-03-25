import React, { useState } from 'react'
import styles from './CollectSelect.module.scss'
import CSSModules from 'react-css-modules'

const CollectSelect = ({ options, field, name, handleChange }) => {
	const [isActive, setIsActive] = useState(false)

	const handleActive = () => {
		setIsActive(active => !active)
	}

	return (
		<div styleName='container'>
			{field > 0 ? field : '— wybierz —'}
			<div
				onClick={() => handleActive()}
				styleName={isActive ? 'arrow-active' : 'arrow'}
			>
				{null}
			</div>
			<ul styleName={isActive ? 'select-active' : 'select'}>
				{options.map((option) => (
					<li
						styleName='option'
						key={option}
						value={option}
						onClick={(e) => {
							handleChange(e.target.value)
							handleActive()
						}}
						name={name}
					>
						{option}
					</li>
				))}
			</ul>
		</div>
	)
}

export default CSSModules(CollectSelect, styles)
