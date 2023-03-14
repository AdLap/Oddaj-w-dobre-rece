import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Btn.module.scss'
import { Link } from 'react-router-dom'

const Btn = ({ path, text }) => {
	return (
		<Link to={path} styleName='button'>
			{text}
		</Link>
	)
}

export default CSSModules(Btn, styles)
