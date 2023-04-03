import React from 'react';
import CollectStep from './CollectStep';
import styles from './CollectSteps.module.scss';
import CSSModules from 'react-css-modules';

const stepDesc = [
    'Wybierz\nrzeczy',
    'Spakuj je\nw worki',
    'Wybierz\nfundację',
    'Zamów\nkuriera'
]

const CollectSteps = () => {
    return (
        <div styleName='container'>
            {
                stepDesc.map((step, index) => (
                    <CollectStep key={index} nr={index + 1} desc={step} />
                ))
            }
            {/* <div>
                <CollectStep nr='1' desc={'Wybierz\nrzeczy'} />
            <CollectStep nr='2' desc={'Spakuj je\nw worki'} /> 
            </div>
           <div>
            <CollectStep nr='3' desc={'Wybierz\nfundację'} />
            <CollectStep nr='4' desc={'Zamów\nkuriera'} />
           </div> */}
            
        </div>
    )
}

export default CSSModules(CollectSteps, styles);