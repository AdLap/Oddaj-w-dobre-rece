import React from 'react';
import image from '../../assets/People.jpg';
import Title from '../utility/Title';
import sign from '../../assets/Signature.svg';
import './HomeAboutUs.scss';

const HomeAboutUs = () => {
    return (
        <section className='about' id='about'>
            <div className='about__description'>
                <Title text='O nas' />
                <p className='about__description__info'>
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </p>
                <div className='about__description__sign'>
                    <img src={sign} alt='sign' />
                </div>
            </div>
            <picture className='about__image'>
                <img className='about__image__pic' src={image} alt={image} />
            </picture>
        </section>
    )
}

export default HomeAboutUs;