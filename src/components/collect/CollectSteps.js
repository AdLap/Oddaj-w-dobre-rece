import React from 'react';
import CollectStep from './CollectStep';
import styles from './CollectSteps.module.scss';
import CSSModules from 'react-css-modules';

const CollectSteps = () => {
    return (
        <div styleName='container'>
            <CollectStep nr='1' desc={'Wybierz\nrzeczy'} />
            <CollectStep nr='2' desc={'Spakuj je\nw worki'} />
            <CollectStep nr='3' desc={'Wybierz\nfundację'} />
            <CollectStep nr='4' desc={'Zamów\nkuriera'} />
        </div>
    )
}

export default CSSModules(CollectSteps, styles);