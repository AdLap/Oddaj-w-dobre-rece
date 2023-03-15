import React from 'react'
import styles from './MenuButton.module.scss'
import CSSModules from 'react-css-modules'
import BurgerIcon from '../../../assets/Icon-burger.svg'
import CloseIcon from '../../../assets/Icon-close.svg'

const MenuButton = ({ active, onOpenMenu }) => {
	return (
		<button styleName='burger' onClick={onOpenMenu}>
			<img src={active ? CloseIcon : BurgerIcon} alt='menu' width='22' height='22' />
		</button>
	)
}

export default CSSModules(MenuButton, styles)
