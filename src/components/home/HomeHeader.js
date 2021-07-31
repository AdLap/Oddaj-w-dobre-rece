import React from 'react';
import { Link } from 'react-router-dom';

import HomeNavBar from './HomeNavBar';

const HomeHeader = () => {
    return (
        <header className='home__header'>
            <div className='home__header__btn'>
                <Link to='/logowanie' className='home__header__btn__item'>Zaloguj</Link>
                <Link to='/rejestracja' className='home__header__btn__item'>Załóż konto</Link>
            </div>
            <HomeNavBar />
        </header>
    )
}

export default HomeHeader;
