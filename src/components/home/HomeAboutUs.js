import React from 'react';
import image from '../../assets/People.jpg';
import Title from '../utility/Title';
import styles from './HomeAboutUs.module.scss';
import CSSModules from 'react-css-modules';


const HomeAboutUs = () => {
    return (
        <section styleName='about' id='about'>
            <div styleName='description'>
                <Title text='O nas' />
                <p styleName='info'>
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </p>
            </div>
            <picture styleName='image'>
                <img styleName='pic' src={image} alt={image}/>
            </picture>
        </section>
    )
}

//export default HomeAboutUs;
export default CSSModules(HomeAboutUs, styles);
