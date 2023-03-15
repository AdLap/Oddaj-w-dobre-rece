import React, { useState } from 'react'
import CSSModules from 'react-css-modules'
import styles from './HomeWhoWeHelp.module.scss'
// import { db } from '../../firebase';
import Title from '../../utility/Title'
import OrganizationsBtn from './OrganizationBtn'
import OrganizationDes from './OrganizationDes'
import OrganizationIntro from './OrganizationIntro'
import Pagination from './Pagination'
import {
	titles,
	fundation,
	organization,
	local,
} from '../../../data/organizations'

const HomeWhoWeHelp = () => {
	const [title, setTitle] = useState(titles.fund)
	const [org, setOrg] = useState(fundation)
	const [currPage, setCurrPage] = useState(1)
	const [orgPerPage] = useState(3)

	const idxLastOrg = currPage * orgPerPage
	const idxFirstOrg = idxLastOrg - orgPerPage
	const currOrg = org.slice(idxFirstOrg, idxLastOrg)

	// useEffect(() => { // TODO
	//     // const unsubscribe = db.collection('organizations')
	//     //     .onSnapshot(snap => {
	//     //         setOrg(snap.docs.map(doc => doc.data()))
	//     //     });

	//     // return () => unsubscribe();
	// }, []);

	const handleOrgList = (id) => {
		if (id === 'fund') {
			setTitle(titles.fund)
			setOrg(fundation)
		}

		if (id === 'org') {
			setTitle(titles.org)
			setOrg(organization)
		}

		if (id === 'loc') {
			setTitle(titles.loc)
			setOrg(local)
		}
		setCurrPage(1)
	}

	const pageNumb = (number) => setCurrPage(number)

	return (
		<section styleName='organizations' id='organizations'>
			<div className='container-main'>
				<Title text='Komu pomagamy?' />
				<div styleName='switch'>
					<OrganizationsBtn
						text='Fundacjom'
						id='fund'
						handleBtnId={handleOrgList}
						style={org === fundation ? 'btn-active' : 'btn'}
					/>
					<OrganizationsBtn
						text={'Organizacjom\npozarządowym'}
						id='org'
						handleBtnId={handleOrgList}
						style={org === organization ? 'btn-active' : 'btn'}
					/>
					<OrganizationsBtn
						text={'Lokalnym\nzbiórkom'}
						id='loc'
						handleBtnId={handleOrgList}
						style={org === local ? 'btn-active' : 'btn'}
					/>
				</div>
				<div styleName='list'>
					<OrganizationIntro des={title} />
					<OrganizationDes organization={currOrg} />
					<Pagination nr={org.length / orgPerPage} paginate={pageNumb} />
				</div>
			</div>
		</section>
	)
}

export default CSSModules(HomeWhoWeHelp, styles)
