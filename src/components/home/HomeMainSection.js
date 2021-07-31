import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../assets/Home-Hero-Image.jpg';


const HomeMainSection = () => {
    return (
        <section className='home__main' id='home'>
            <div className='home__main__img'>
                <img className='home__main__img__item' src={Hero} alt='Oddaj rzeczy' />
            </div>
            <div className='home__main__description'>
                <h1 className='home__main__description__title'>
                    Zacznij pomagać!<br />
                    Oddaj niechciane rzeczy w zaufane ręce
                </h1>
                <div className='home__main__description__btn'>
                    <Link to='/logowanie' className='home__main__description__btn__item'>oddaj<br />rzeczy</Link>
                    <Link to='/logowanie' className='home__main__description__btn__item'>zorganizuj zbiórkę</Link>
                </div>
            </div>
        </section>
    )
}

export default HomeMainSection;
