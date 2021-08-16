import React from 'react';
import styles from './CollectBtn.module.scss';
import CSSModules from 'react-css-modules';

const CollectBtn = () => {
    return (
        <div styleName='btn'>
            Dalej
        </div>
    );
}

export default CSSModules(CollectBtn, styles);