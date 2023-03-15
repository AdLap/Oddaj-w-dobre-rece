import React from 'react'
import styles from './OrganizationDes.module.scss'
import CSSModules from 'react-css-modules'

const OrganizationDes = ({ organization }) => {
	return (
		<>
			{organization.map((org) => (
				<div styleName='container' key={org.id}>
					<div styleName='box'>
						<h3 styleName='name'>{org.name}</h3>
					</div>
					<span styleName='description'>{org.things}</span>
				</div>
			))}
		</>
	)
}

export default CSSModules(OrganizationDes, styles)
