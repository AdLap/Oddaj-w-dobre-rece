import React from 'react';
import Hero from '../../assets/Home-Hero-Image.jpg';
import Title from '../utility/Title';
import Btn from '../utility/Btn';

const HomeMainSection = () => {
    const textTitle =  'Zacznij pomagać!\nOddaj niechciane rzeczy w zaufane ręce';

    return (
        <section className='home__main' id='home'>
            <div className='home__main__img'>
                <img className='home__main__img__item' src={Hero} alt='Oddaj rzeczy' />
            </div>
            <div className='home__main__description'>
                <Title text={textTitle} />
                <div className='home__main__description__btn'>
                    <Btn path='/logowanie' text={'oddaj\nrzeczy'} />
                    <Btn path='/logowanie' text={'zorganizuj\nzbiórkę'} />
                </div>
            </div>
        </section>
    )
}

export default HomeMainSection;
