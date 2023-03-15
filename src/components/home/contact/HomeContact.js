import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './HomeContact.module.scss'
import Title from '../../utility/Title'
import ContactForm from './ContactForm'

const HomeContact = () => {
	return (
		<section styleName='contact' id='contact'>
			<div styleName='bg-cover'>
				<div className='container-main' styleName='container'>
					<div styleName='form-wrapper'>
						<Title text='Skontaktuj się z nami' />
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	)
}

export default CSSModules(HomeContact, styles)
