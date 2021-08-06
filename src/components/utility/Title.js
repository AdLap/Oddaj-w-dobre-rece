import React from 'react';
import styles from './Title.module.scss';
import CSSModules from 'react-css-modules';

const Title = ({text}) => {
    return (
        <h2 styleName='title'>{text}</h2>
    )
}

 export default CSSModules(Title, styles);