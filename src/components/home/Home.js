import React from 'react';
import HomeAboutUs from './HomeAboutUs';
import HomeContact from './HomeContact';
import HomeFooter from './HomeFooter';
import HomeFourSteps from './HomeFourSteps';
import HomeHeader from './HomeHeader';
import HomeMainSection from './HomeMainSection';
import HomeTreeColumns from './HomeTreeColumns';
import HomeWhoWeHelp from './HomeWhoWeHelp';



const Home = () => {
    return(
        <>
            <h1>Home</h1>
            <HomeHeader />
            <HomeMainSection />
            <HomeTreeColumns />
            <HomeFourSteps />
            <HomeAboutUs />
            <HomeWhoWeHelp />
            <HomeContact />
            <HomeFooter />
        </>
    )
}

export default Home;
