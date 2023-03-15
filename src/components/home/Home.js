import React from 'react'
import HomeAboutUs from './about/HomeAboutUs'
import HomeContact from './HomeContact'
import HomeFooter from './HomeFooter'
import HomeFourSteps from './steps/HomeFourSteps'
import HomeHeader from './header/HomeHeader'
import HomeMainSection from './main/HomeMainSection'
import HomeThreeColumns from './threeColumns/HomeThreeColumns'
import HomeWhoWeHelp from './HomeWhoWeHelp'

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

export default Home
