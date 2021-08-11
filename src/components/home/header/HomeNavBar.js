import React from 'react';
import { NavHashLink } from 'react-router-hash-link';

const HomeNavBar = () => {
    return (
        <nav className='home__header__nav'>
            <NavHashLink
                smooth to='/#home'
                offset={0}
                duration={300}
                className='home__header__nav__item'
                activeStyle={{border: '.75px solid #3C3C3C'}}
            >
                Start
            </NavHashLink>
            <NavHashLink
                smooth to='/#info'
                offset={0}
                duration={300}
                className='home__header__nav__item'
                activeStyle={{border: '.75px solid #3C3C3C'}}
            >O co chodzi?</NavHashLink>
            <NavHashLink
                smooth to='/#about'
                offset={0}
                duration={300}
                className='home__header__nav__item'
                activeStyle={{border: '.75px solid #3C3C3C'}}
            >O nas</NavHashLink>
            <NavHashLink
                smooth to='/#organizations'
                offset={0}
                duration={300}
                className='home__header__nav__item'
                activeStyle={{border: '.75px solid #3C3C3C'}}
            >Fundacja i organizacje</NavHashLink>
            <NavHashLink
                smooth to='/#contact'
                offset={0}
                duration={300}
                className='home__header__nav__item'
                activeStyle={{border: '.75px solid #3C3C3C'}}
            >Kontakt</NavHashLink>
        </nav>
    )
}

export default HomeNavBar;