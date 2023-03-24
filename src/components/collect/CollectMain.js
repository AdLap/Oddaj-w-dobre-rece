import React from 'react'
import Title from '../utility/Title'
import CollectSteps from './CollectSteps'
import FormHero from '../../assets/Form-Hero-Image.jpg'
import styles from './CollectMain.module.scss'
import CSSModules from 'react-css-modules'

const CollectMain = () => {
	return (
		<section styleName='collect'>
			<div styleName='container'>
				<div styleName='image'>
					<img src={FormHero} alt={FormHero} />
				</div>
				<div styleName='desc'>
					<Title text={'Oddaj rzeczy, których już nie chcesz\nPOTRZEBUJĄCYM'} />
					<div>
						<h3 styleName='title'>Wystarczą 4 proste kroki:</h3>
					</div>
					<CollectSteps />
				</div>
			</div>
		</section>
	)
}

export default CSSModules(CollectMain, styles)
