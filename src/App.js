import React from 'react'
import { Route, Routes, Link, useLocation } from 'react-router-dom'
import Home from './components/home/Home'
import LogIn from './components/login/LogIn'
import Register from './components/login/Register'
import LogOut from './components/login/LogOut'
import CollectHome from './components/collect/CollectHome'
import NavButton from './components/home/header/NavButton'
import HomeIcon from './assets/Icon-home.svg'

const NotFound = () => {
	return (
		<>
			<h1>Strona nie istnieje</h1>
			<Link to='/'>Home</Link>
		</>
	)
}

const App = () => {
	const location = useLocation()
	return (
		<>
			{location.pathname !== '/' && <NavButton path='/' img={HomeIcon} />}
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/logowanie' element={<LogIn />} />
				<Route path='/rejestracja' element={<Register />} />
				<Route path='/wylogowano' element={<LogOut />} />
				<Route path='/oddaj-rzeczy' element={<CollectHome />} />
				<Route element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
