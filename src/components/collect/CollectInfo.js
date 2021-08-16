import React from 'react';
import styles from './CollectInfo.module.scss';
import CSSModules from 'react-css-modules';

const CollectFormInfo = () => {
    return (
        <div styleName='box'>
            <span styleName='title'>Ważne!</span><br />
            <span styleName='desc'>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</span>
        </div>
    )
}

export default CSSModules(CollectFormInfo, styles);