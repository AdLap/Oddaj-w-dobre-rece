import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './HomeAboutUs.module.scss'
import image from '../../../assets/People.jpg'
import Title from '../../utility/Title'
import sign from '../../../assets/Signature.svg'

const HomeAboutUs = () => {
	return (
		<section styleName='container' id='about'>
			<div className='container-main' styleName='about'>
				<div styleName='description'>
					<Title text='O nas' />
					<p styleName='info'>
						Nori grape silver beet broccoli kombu beet greens fava bean potato
						quandong celery. Bunya nuts black-eyed pea prairie turnip leek
						lentil turnip greens parsnip.
					</p>
					<div styleName='sign'>
						<img src={sign} alt='sign' />
					</div>
				</div>
				<picture styleName='image'>
					<img src={image} alt={image} />
				</picture>
			</div>
		</section>
	)
}

export default CSSModules(HomeAboutUs, styles)
