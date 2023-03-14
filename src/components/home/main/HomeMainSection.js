import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './HomeMainSection.module.scss'
import Hero from '../../../assets/Home-Hero-Image.jpg'
import Title from '../../utility/Title'
import Btn from '../../utility/Btn'

const HomeMainSection = () => {
	const textTitle = 'Zacznij pomagać!\nOddaj niechciane rzeczy w zaufane ręce'

	return (
		<section styleName='container' className='container-main' id='home'>
			<div styleName='img__box'>
				<img styleName='img__box__item' src={Hero} alt='Oddaj rzeczy' />
			</div>
			<div styleName='description'>
				<Title text={textTitle} />
				<div styleName='description__buttons'>
					<Btn path='/logowanie' text={'oddaj rzeczy'} />
					<Btn path='/oddaj-rzeczy' text={'zorganizuj zbiórkę'} />
				</div>
			</div>
		</section>
	)
}

export default CSSModules(HomeMainSection, styles)
