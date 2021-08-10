import React from 'react'
import styles from './OrganizationIntro.module.scss';
import CSSModules from 'react-css-modules';

const OrganizationIntro = ({ des }) => {
    return (
        <h3 styleName='description'>
            {des}
        </h3>
    );
}

export default CSSModules(OrganizationIntro, styles);
