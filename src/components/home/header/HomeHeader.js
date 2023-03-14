import React from 'react'
import { useLocation } from 'react-router-dom'
import HeaderLoginBtns from './HeaderLoginBtns'
import HomeNavBar from './HomeNavBar'
import NavButton from './NavButton'
import Home from '../../../assets/Icon-home.svg'

const HomeHeader = () => {
	const location = useLocation()

	return (
		<header className='home__header'>
			<div className='home__header__btn'>
				<HeaderLoginBtns />
			</div>
			{location.pathname === '/' ? <HomeNavBar /> : <NavButton path='/' img={Home} />}
		</header>
	)
}

export default HomeHeader
