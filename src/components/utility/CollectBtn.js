import React from 'react'
import styles from './CollectBtn.module.scss'
import CSSModules from 'react-css-modules'

const CollectBtn = ({ type, onClick, text }) => {
	return (
		<button type={type} onClick={onClick} styleName='btn'>
			{text}
		</button>
	)
}

export default CSSModules(CollectBtn, styles)
