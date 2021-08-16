import React from 'react';
import styles from './CollectStep.module.scss';
import CSSModules from 'react-css-modules';

const CollectStep = ({ nr, desc }) => {
    return (
        <div styleName='box'>
            <span styleName='nr'>{nr}</span>
            <span styleName='desc'>{desc}</span>
        </div>
    );
}

export default CSSModules(CollectStep, styles);