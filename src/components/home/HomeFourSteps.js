import React from 'react';
import Title from '../utility/Title';
import Btn from '../utility/Btn';
import StepsItem from './steps/StepsItem';
import Things from '../../assets/Icon-1.svg';
import Packing from '../../assets/Icon-2.svg';
import Choose from '../../assets/Icon-3.svg';
import Courier from '../../assets/Icon-4.svg';
import './HomeFourSteps.scss';

const HomeFourSteps = () => {
    return (
        <section className='steps' id='info'>
            <Title text='Wystarczą 4 proste kroki' />
            <div className='steps__container-bg'>
                <div className='steps__container container-main'>
                    <StepsItem img={Things} title='Wybierz rzeczy' description='ubrania, zabawki, sprzęt i inne' />
                    <StepsItem img={Packing} title='Spakuj je' description='skorzystaj z worków na śmieci' />
                    <StepsItem img={Choose} title='Zdecyduj komu chcesz pomóc' description='wybierz zaufane miejsce' />
                    <StepsItem img={Courier} title='Zamów kuriera' description='kurier przyjedzie w dogodnym terminie' />
                </div>

            </div>
            <Btn path='/logowanie' text={'oddaj\nrzeczy'} />
        </section>
    )
}

export default HomeFourSteps;
