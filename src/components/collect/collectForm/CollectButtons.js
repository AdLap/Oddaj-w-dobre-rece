import React from 'react'
import styles from './CollectButtons.module.scss'
import CSSModules from 'react-css-modules'
import CollectBtn from '../../utility/CollectBtn'

const CollectButtons = ({ prev, send }) => {
	return (
		<div styleName='buttons'>
			{prev && <CollectBtn onClick={prev} text='Wstecz' />}

			<CollectBtn
				type='submit'
				text={send ? 'Potwierdź' : 'Dalej'}
				onClick={send}
			/>
		</div>
	)
}

export default CSSModules(CollectButtons, styles)
