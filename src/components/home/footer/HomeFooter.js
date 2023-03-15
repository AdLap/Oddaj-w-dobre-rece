import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './HomeFooter.module.scss'

const HomeFooter = () => {
	return (
		<footer styleName='footer'>
			<div className='container-main' styleName='container'>
				<a
					styleName='fb'
					href='https://facebook.com'
					target='_blank'
					rel='noreferrer'
				>
					{null}
				</a>
				<a
					styleName='insta'
					href='https://instagram.com'
					target='_blank'
					rel='noreferrer'
				>
					{null}
				</a>
			</div>
		</footer>
	)
}

export default CSSModules(HomeFooter, styles)
