import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './HomeHeader.module.scss'
import HeaderLoginBtns from './HeaderLoginBtns'
import HomeNavBar from './HomeNavBar'

const HomeHeader = () => {
	return (
		<header styleName='header'>
			<div styleName='buttons'>
				<HeaderLoginBtns />
			</div>
			<HomeNavBar />
		</header>
	)
}

export default CSSModules(HomeHeader, styles)
