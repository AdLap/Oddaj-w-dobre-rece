import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const HomeNavBar = () => {
    return (
        <nav className='home__header__nav'>
            <Link
                activeClass="active"
                to='home'
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
                className='home__header__nav__item'
            >Start</Link>
            <Link
                activeClass="active"
                to='info'
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
                className='home__header__nav__item'
            >O co chodzi?</Link>
            <Link
                activeClass="active"
                to='about'
                spy={true}
                smooth={true}
                offset={0}
                duration={300} className='home__header__nav__item'
            >O nas</Link>
            <Link
                activeClass="active"
                to='oraganizations'
                spy={true}
                smooth={true}
                offset={0}
                duration={300} className='home__header__nav__item'
            >Fundacja i organizacje</Link>
            <Link
                activeClass="active"
                to='contact'
                spy={true}
                smooth={true}
                offset={0}
                duration={300} className='home__header__nav__item'
            >Kontakt</Link>
        </nav>
    )
}

export default HomeNavBar;