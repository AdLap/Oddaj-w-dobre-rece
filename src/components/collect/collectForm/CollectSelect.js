import React, { useState } from 'react';
import styles from './CollectSelect.module.scss';
import CSSModules from 'react-css-modules';


const CollectSelect = ({ options, field, name, onChange }) => {
    const [isActive, setIsActive] = useState(false)

    const handleActive = () => {
        setIsActive(!isActive);
    }

    return (
        <div styleName='container'>
            {field > 0 ? field : '— wybierz —'}
            <div
                styleName={isActive ? 'arrow-active' : 'arrow'}
                onClick={() => handleActive(true)}
            >
                {null}
            </div>
            <ul styleName={isActive ? 'select-active' : 'select'}>
                {options.map(option => (
                    <li styleName='option'
                        key={option}
                        value={option}
                        onClick={e => {onChange(e => field = e.target.value); handleActive(false)}}
                        // onClick={e => {field = e.target.value; onChange(field); handleActive(false)}}
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