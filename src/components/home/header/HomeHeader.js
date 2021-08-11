import React from 'react';
import HeaderLoginBtns from './HeaderLoginBtns';

import HomeNavBar from './HomeNavBar';

const HomeHeader = () => {
    return (
        <header className='home__header'>
            <div className='home__header__btn'>
                <HeaderLoginBtns />
            </div>
            <HomeNavBar />
        </header>
    )
}

export default HomeHeader;
