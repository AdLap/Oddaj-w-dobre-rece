import React from 'react';
import styles from './CollectFormTitle.module.scss';
import CSSModules from 'react-css-modules';

const CollectFormTitle = ({ text }) => {
    return (
        <div styleName='box'>
            <span styleName='title'>Ważne!</span><br />
            <span styleName='desc'>{text}</span>
        </div>
    )
}

export default CSSModules(CollectFormTitle, styles);