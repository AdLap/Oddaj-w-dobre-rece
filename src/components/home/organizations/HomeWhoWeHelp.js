import React, { useEffect, useState } from 'react';
import Title from '../../utility/Title';
import OrganizationsBtn from './OrganizationBtn';
import styles from './HomeWhoWeHelp.module.scss';
import CSSModules from 'react-css-modules';
import OrganizationDes from './OrganizationDes';
import Pagination from './Pagination';
import OrganizationIntro from './OrganizationIntro';

const HomeWhoWeHelp = () => {
    const [org, setOrg] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currPage, setCurrPage] = useState(1);
    const [orgPerPage, setOrgPerPage] = useState(3);

    useEffect(() => {

    }, []);


    return (
        <section styleName='organizations' id='oraganizations'>
            <div styleName='container'>
                <Title text='Komu pomagamy?' />
                <div styleName='btns'>
                    <OrganizationsBtn text='Fundacjom' />
                    <OrganizationsBtn text={'Organizacjom\npozarządowym'} />
                    <OrganizationsBtn text={'Lokalnym\nzbiórkom'} />
                </div>
                <div styleName='list'>
                    <OrganizationIntro />
                    <OrganizationDes />
                    <OrganizationDes />
                    <OrganizationDes />
                    <Pagination />
                </div>
            </div>
        </section>
    )
}

export default CSSModules(HomeWhoWeHelp, styles);

// TODO każdy widok ładowany z firebase
