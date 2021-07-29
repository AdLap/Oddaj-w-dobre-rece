import React from 'react';
import { Link } from 'react-scroll';

const HomeHeader = () => {
    return (
        <header className='home-header'>
            <button classsName='home-header-btn'>Zaloguj</button>
            <button className='home-header-btn'>Załóż konto</button>

            <nav className='home-header-nav'>
                <Link>Start</Link>
                <Link>O co chodzi?</Link>
                <Link>O nas</Link>
                <Link>Fundacja i organizacje</Link>
                <Link>Kontakt</Link>
            </nav>
        </header>
    )
}

export default HomeHeader;
