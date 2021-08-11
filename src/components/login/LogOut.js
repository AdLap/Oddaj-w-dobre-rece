import React from 'react'
import { Link } from 'react-router-dom';
import HomeHeader from '../home/header/HomeHeader';
import Title from '../utility/Title';
import styles from './LogOut.module.scss';
import CSSModules from 'react-css-modules';

const LogOut = () => {
    return (
        <section>
            <HomeHeader />
            <div styleName='logout'>
                <Title text={'Wylogowanie nastąpiło\npomyślnie!'} />
                <Link to='/' styleName='btn'>Strona główna</Link>
            </div>
        </section >
    )
}

export default CSSModules(LogOut, styles);