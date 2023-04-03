import React from 'react';
import styles from './CollectFormInfo.module.scss';
import CSSModules from 'react-css-modules';

const CollectFormInfo = ({ text }) => {
    return (
        <div styleName='box'>
            <span styleName='title'>Ważne!</span><br />
            <span styleName='desc'>{text}</span>
        </div>
    )
}

export default CSSModules(CollectFormInfo, styles);