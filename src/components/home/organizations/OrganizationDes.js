import React from 'react';
import styles from './OrganizationsDes.module.scss';
import CSSModules from 'react-css-modules';

const OrganizationDes = ({ organization }) => {
    return (
        <>
            {
                organization.map(org =>
                    <div styleName='container' key={org.id}>
                        <div styleName='box'>
                            <h3 styleName='name'>{org.name}</h3>
                            <span styleName='description'>{org.des}</span>
                        </div>
                        <span>{org.things}</span>
                    </div>
                )
            }
        </>
    )
}

export default CSSModules(OrganizationDes, styles);
