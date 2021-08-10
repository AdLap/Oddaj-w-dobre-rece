import React from 'react';
import styles from './OrganizationBtn.module.scss';
import CSSModules from 'react-css-modules';

const OrganizationBtn = ({ text, id, handleBtnId }) => {
    return (
        <button styleName='btn' id={id} onClick={() => handleBtnId(id)}>{text}</button>
    )
}

export default CSSModules(OrganizationBtn, styles);