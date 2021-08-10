import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import styles from './HomeWhoWeHelp.module.scss';
import CSSModules from 'react-css-modules';
import Title from '../../utility/Title';
import OrganizationsBtn from './OrganizationBtn';
import OrganizationDes from './OrganizationDes';
import OrganizationIntro from './OrganizationIntro';
import Pagination from './Pagination';
import { titles, fundation, organization, local } from '../../utility/organizations';

const HomeWhoWeHelp = () => {
    const [title, setTitle] = useState(titles.fund);
    const [org, setOrg] = useState(fundation);
    const [currPage, setCurrPage] = useState(1);
    const [orgPerPage, setOrgPerPage] = useState(3);
    const [paginate, setPaginate] = useState(3);

    useEffect(() => {
        setPaginate(org.length / orgPerPage);

        // const unsubscribe = db.collection('organizations')
        //     .onSnapshot(snap => {
        //         setOrg(snap.docs.map(doc => doc.data()))
        //     });

        // return () => unsubscribe();
    }, [org]);

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
    }

    return (
        <section styleName='organizations' id='oraganizations'>
            <div styleName='container'>
                <Title text='Komu pomagamy?' />
                <div styleName='btns'>
                    <OrganizationsBtn text='Fundacjom' id='fund' handleBtnId={handleOrgList} />
                    <OrganizationsBtn text={'Organizacjom\npozarządowym'} id='org' handleBtnId={handleOrgList} />
                    <OrganizationsBtn text={'Lokalnym\nzbiórkom'} id='loc' handleBtnId={handleOrgList} />
                </div>
                <div styleName='list'>
                    <OrganizationIntro des={title} />
                    <OrganizationDes org={org[0].name} des={org[0].mission} things={org[0].things} />
                    <OrganizationDes org={org[1].name} des={org[1].mission} things={org[1].things} />
                    <OrganizationDes org={org[2].name} des={org[2].mission} things={org[2].things} />
                    <Pagination nr={paginate} />
                </div>
            </div>
        </section>
    )
}

export default CSSModules(HomeWhoWeHelp, styles);

