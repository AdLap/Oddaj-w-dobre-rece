import React from 'react';
import Hero from '../../assets/Home-Hero-Image.jpg';


const HomeMainSection = () => {
    return (
        <section className='home__main'>
            <div className='home__main__img'>
                <img className='home__main__img__item' src={Hero} alt='Oddaj rzeczy' />
            </div>
            <div className='home__main__description'>
                <h1 className='home__main__description__title'>
                    Zacznij pomagać!<br />
                    Oddaj niechciane rzeczy w zaufane ręce
                </h1>
                <div className='home__main__description__btn'>
                    <button className='home__main__description__btn__item'>oddaj<br />rzeczy</button>
                    <button className='home__main__description__btn__item'>zorganizuj zbiórkę</button>
                </div>
            </div>
        </section>
    )
}

export default HomeMainSection;
