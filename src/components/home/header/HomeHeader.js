import React, { useState } from 'react'
import CSSModules from 'react-css-modules'
import styles from './HomeHeader.module.scss'
import HeaderLoginBtns from './HeaderLoginBtns'
import HomeNavBar from './HomeNavBar'
import MenuButton from './MenuButton'
import { useMediaQuery } from '../../../hooks/useMediaQuery'

const HomeHeader = () => {
	const [active, setActive] = useState(false)
	let isDesktop = useMediaQuery('(min-width: 960px)')

	const openMenu = () => {
		setActive((state) => !state)
	}
	return (
		<header styleName={isDesktop ? 'header' : active ? 'header' : 'header-hidden'}>
			{
				!isDesktop && <MenuButton active={active} onOpenMenu={openMenu} />
			}
			
			<div styleName='buttons'>
				<HeaderLoginBtns />
			</div>
			<HomeNavBar desktop={isDesktop} active={active} openMenu={openMenu} />
		</header>
	)
}

export default CSSModules(HomeHeader, styles)
