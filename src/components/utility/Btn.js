import React from 'react';
import { Link } from 'react-router-dom';

const Btn = ({path, text}) => {
    return (
        <Link to={path} className='btn'>{text}</Link>
    )
}

export default Btn;
