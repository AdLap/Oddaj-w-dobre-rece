import React from 'react';
import styles from './CollectSelect.module.scss';
import CSSModules from 'react-css-modules';


const CollectSelect = ({ options, field, name }) => {


    return (
        <div styleName='container'>
            <div styleName='arrow'>{null}</div>
            <ul styleName='select-active'>
                {options.map(option => (
                    <li styleName='option'
                        key={option}
                        value={option}
                        onClick={e => field = e.target.value}
                        name={name}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CSSModules(CollectSelect, styles);