import React from 'react';
import styles from './OrganizationsDes.module.scss';
import CSSModules from 'react-css-modules';

const OrganizationDes = ({ org, des, things }) => {
    return (
        <div styleName='container'>
            <div styleName='box'>
                <h3 styleName='name'>{org}</h3>
                <span styleName='description'>{des}</span>
            </div>
            <span>{things}</span>
        </div>
    );
}

export default CSSModules(OrganizationDes, styles);
