import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeadersLoginBtns.module.scss';
import CSSModules from 'react-css-modules';

const HeaderLoginBtns = () => {
    return (
        <>
            <Link to='/logowanie' styleName='btn'>Zaloguj</Link>
            <Link to='/rejestracja' styleName='btn'>Załóż konto</Link>
        </>
    )
}

export default CSSModules(HeaderLoginBtns, styles);