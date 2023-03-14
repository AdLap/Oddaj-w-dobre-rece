import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './HomeNavBar.module.scss'
import { Link as ScrollLink } from 'react-scroll'

const links = [
	{ to: 'home', name: 'Start' },
	{ to: 'info', name: 'O co chodzi?' },
	{ to: 'about', name: 'O nas' },
	{ to: 'organizations', name: 'Fundacja i organizacje' },
	{ to: 'contact', name: 'Kontakt' },
]

const HomeNavBar = () => {
	return (
		<nav styleName='navbar'>
			{links.map((link) => (
				<ScrollLink
					key={link.to}
					to={`${link.to}`}
					className='navbar__item'
					activeClass='link-active'
					smooth={true}
					spy={true}
				>
					{link.name}
				</ScrollLink>
			))}
		</nav>
	)
}

export default CSSModules(HomeNavBar, styles)
