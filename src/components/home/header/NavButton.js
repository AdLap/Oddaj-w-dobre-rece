import React from 'react'
import styles from './NavButton.module.scss'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router-dom'

const NavButton = ({ path, img }) => {
	return (
		<Link to={path} styleName='button'>
			<img src={img} alt='' width='30' height='30' />
		</Link>
	)
}

export default CSSModules(NavButton, styles)
