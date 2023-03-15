import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './HomeThreeColumns.module.scss'
import Column from './Column'
import { columns } from '../../../data/threeColumns'

const HomeThreeColumns = () => {
	return (
		<section styleName='columns'>
			<div styleName='columns__container' className='container-main'>
				{columns.map((column) => (
					<Column
						key={column.id}
						number={column.number}
						subtitle={column.subtitle}
						description={column.description}
					/>
				))}
			</div>
		</section>
	)
}

export default CSSModules(HomeThreeColumns, styles)
