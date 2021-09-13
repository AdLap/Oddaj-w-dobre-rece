import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import Title from '../utility/Title';
import OrganizationsBtn from './organizations/OrganizationBtn';
import OrganizationDes from './organizations/OrganizationDes';
import OrganizationIntro from './organizations/OrganizationIntro';
import Pagination from './organizations/Pagination';
import { titles, fundation, organization, local } from '../utility/organizations';
import './HomeWhoWeHelp.scss';

const HomeWhoWeHelp = () => {
    const [title, setTitle] = useState(titles.fund);
    const [org, setOrg] = useState(fundation);
    const [currPage, setCurrPage] = useState(1);
    const [orgPerPage] = useState(3);

    const idxLastOrg = currPage * orgPerPage;
    const idxFirstOrg = idxLastOrg - orgPerPage;
    const currOrg = org.slice(idxFirstOrg, idxLastOrg);

    // useEffect(() => {
    //     // const unsubscribe = db.collection('organizations')
    //     //     .onSnapshot(snap => {
    //     //         setOrg(snap.docs.map(doc => doc.data()))
    //     //     });

    //     // return () => unsubscribe();
    // }, []);

    const handleOrgList = (id) => {
        if (id === 'fund') {
            setTitle(titles.fund);
            setOrg(fundation);
        }

        if (id === 'org') {
            setTitle(titles.org);
            setOrg(organization);

        }

        if (id === 'loc') {
            setTitle(titles.loc);
            setOrg(local);
        }
        setCurrPage(1);
    }

    const pageNumb = number => setCurrPage(number)

    return (
        <section className='organizations' id='organizations'>
            <div className='container-main'>
                <Title text='Komu pomagamy?' />
                <div className='organizations__btns'>
                    <OrganizationsBtn text='Fundacjom' id='fund' handleBtnId={handleOrgList} style={org === fundation ? 'btn-active' : 'btn'} />
                    <OrganizationsBtn text={'Organizacjom\npozarządowym'} id='org' handleBtnId={handleOrgList} style={org === organization ? 'btn-active' : 'btn'} />
                    <OrganizationsBtn text={'Lokalnym\nzbiórkom'} id='loc' handleBtnId={handleOrgList} style={org === local ? 'btn-active' : 'btn'} />
                </div>
                <div className='organizations__list'>
                    <OrganizationIntro des={title} />
                    <OrganizationDes organization={currOrg} />
                    <Pagination nr={org.length / orgPerPage} paginate={pageNumb} />
                </div>
            </div>
        </section>
    )
}

export default HomeWhoWeHelp;
