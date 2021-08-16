import React, { useState } from 'react';
import CollectBtn from './CollectBtn';
import styles from './CollectForm.module.scss';
import CSSModules from 'react-css-modules';


const CollectForm = () => {
    const [step, setStep] = useState(1)

    return (
        <section styleName='container'>
            <div styleName='step'>
                Krok {step}/4
            </div>
            <div styleName='form'>
                robocze
            </div>
            <CollectBtn />
        </section>
    );
}

export default CSSModules(CollectForm, styles);