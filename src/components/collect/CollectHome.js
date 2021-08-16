import React from 'react';
import CollectMain from './CollectMain';
import CollectForm from './collectForm/CollectForm';
import HomeContact from '../home/contact/HomeContact';
import HomeFooter from '../home/HomeFooter';

const CollectHome = () => {
    return (
        <>
            <CollectMain />
            <CollectForm />
            <HomeContact />
            <HomeFooter />
        </>
    );
}

export default CollectHome;