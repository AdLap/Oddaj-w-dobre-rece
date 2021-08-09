import React, { useState } from 'react'
import styles from './OrganizationIntro.module.scss';
import CSSModules from 'react-css-modules';

const OrganizationIntro = () => {
    const [des, setDes] = useState(`W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. 
Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.`);

    return (
        <h3 styleName='description'>
            {des}
        </h3>
    );
}

export default CSSModules(OrganizationIntro, styles);
