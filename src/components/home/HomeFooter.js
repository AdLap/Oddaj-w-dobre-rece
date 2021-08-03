import React from 'react';
import styles from './HomeFooter.module.scss';
import CSSModules from 'react-css-modules';

const HomeFooter = () => {
    return (
        <footer styleName='footer'>
            <a styleName='fb' href='https://facebook.com'>{null}</a>
            <a styleName='insta' href='https://instagram.com'>{null}</a>
        </footer>
    )
}

export default CSSModules(HomeFooter, styles);
