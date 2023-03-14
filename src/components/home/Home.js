import React from 'react';
import HomeAboutUs from './HomeAboutUs';
import HomeContact from './HomeContact';
import HomeFooter from './HomeFooter';
import HomeFourSteps from './HomeFourSteps';
import HomeHeader from './header/HomeHeader';
import HomeMainSection from './main/HomeMainSection';
import HomeThreeColumns from './HomeThreeColumns';
import HomeWhoWeHelp from './HomeWhoWeHelp';

const Home = () => {
    return (
        <>
            <HomeHeader />
            <HomeMainSection />
            <HomeThreeColumns />
            <HomeFourSteps />
            <HomeAboutUs />
            <HomeWhoWeHelp />
            <HomeContact />
            <HomeFooter />
        </>
    )
}

export default Home;
