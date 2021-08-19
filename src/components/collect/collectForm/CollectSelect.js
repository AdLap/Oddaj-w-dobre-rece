import React from 'react';
import CSSModules from 'react-css-modules';


const CollectSelect = ({ options, field, name }) => {


    return (
        <div className='container'>
            <div className='arrow'>{null}</div>
            <ul className='select'>
                {options.map(option => (
                    <li className='options'
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

//export default CSSModules(CollectSelect, styles);