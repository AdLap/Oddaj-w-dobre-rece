import React from 'react';
import styles from './OrganizationsDes.module.scss';
import CSSModules from 'react-css-modules';

const OrganizationDes = ({ org, des, things }) => {
    return (
        <div styleName='container'>
            <div styleName='box'>
                <h3 styleName='name'>Fundacja{org}</h3>
                <span styleName='description'>opis{des}</span>
            </div>
            <span>rzeczy{things}</span>
        </div>
    );
}

export default CSSModules(OrganizationDes, styles);
