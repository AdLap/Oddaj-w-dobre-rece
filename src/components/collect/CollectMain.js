import React from 'react';
import HomeHeader from '../home/header/HomeHeader';
import Title from '../utility/Title';
import CollectSteps from './CollectSteps';
import CollectInfo from './CollectInfo';
import FormHero from '../../assets/Form-Hero-Image.jpg';
import styles from './CollectMain.module.scss';
import CSSModules from 'react-css-modules';


const CollectMain = () => {
    return (
        <section styleName='collect'>
            <div styleName='container'>
                <HomeHeader />
                <div styleName='img'>
                    <img src={FormHero} alt={FormHero} styleName='pic' />
                </div>
                <div styleName='desc'>
                    <Title text={'Oddaj rzeczy, których już nie chcesz\nPOTRZEBUJĄCYM'} />
                    <div>
                        <h3 styleName='title'>Wystarczą 4 proste kroki:</h3>
                    </div>
                    <CollectSteps />
                </div>
            </div>
            <CollectInfo />
        </section>

    );
}

export default CSSModules(CollectMain, styles);