import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './CollectFormThanks.module.scss'
import Title from '../../utility/Title'

const CollectFormThanks = () => {
	return (
        <div styleName='success-wrapper'>
            <Title text='Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie informacje o odbiorze.' />
        </div>
	)
}

export default CSSModules(CollectFormThanks, styles)
