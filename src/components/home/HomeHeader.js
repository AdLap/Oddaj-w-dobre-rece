import React from 'react';
// import { Link } from 'react-scroll';

const HomeHeader = () => {
    return (
        <header className='home__header'>
            <div className='home__header__btn'>
                <button className='home__header__btn__item'>Zaloguj</button>
                <button className='home__header__btn__item'>Załóż konto</button>
            </div>

  {/* TODO! nav use <Link /> from react-scroll */}

            <nav>
                <ul className='home__header__nav'>
                    <li className='home__header__nav__item'>Start</li>
                    <li className='home__header__nav__item'>O co chodzi?</li>
                    <li className='home__header__nav__item'>O nas</li>
                    <li className='home__header__nav__item'>Fundacja i organizacje</li>
                    <li className='home__header__nav__item'>Kontakt</li>
                </ul>
            </nav>
        </header>
    )
}

export default HomeHeader;
