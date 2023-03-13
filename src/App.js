import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './components/home/Home'
import LogIn from './components/login/LogIn'
import Register from './components/login/Register'
import LogOut from './components/login/LogOut'
import CollectHome from './components/collect/CollectHome'

const NotFound = () => {
	return (
		<>
			<h1>Strona nie istnieje</h1>
			<Link to='/'>Home</Link>
		</>
	)
}

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/logowanie' element={<LogIn />} />
				<Route path='/rejestracja' element={<Register />} />
				<Route path='/wylogowano' element={<LogOut />} />
				<Route path='/oddaj-rzeczy' element={<CollectHome />} />
				<Route element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
