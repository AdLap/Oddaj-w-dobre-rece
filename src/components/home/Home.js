import React from 'react';
import HomeAboutUs from './HomeAboutUs';
import HomeContact from './contact/HomeContact';
import HomeFooter from './HomeFooter';
import HomeFourSteps from './steps/HomeFourSteps';
import HomeHeader from './header/HomeHeader';
import HomeMainSection from './HomeMainSection';
import HomeThreeColumns from './HomeThreeColumns';
import HomeWhoWeHelp from './organizations/HomeWhoWeHelp';

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
