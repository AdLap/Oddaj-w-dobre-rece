import React from 'react';
import styles from './OrganizationBtn.module.scss';
import CSSModules from 'react-css-modules';

const OrganizationBtn = ({ text }) => {
    return (
        <div styleName='btn'>{text}</div>
    )
}

export default CSSModules(OrganizationBtn, styles);