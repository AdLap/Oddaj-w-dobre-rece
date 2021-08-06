import React from 'react';
import Title from '../utility/Title';
import styles from './HomeWhoWeHelp.module.scss';
import CSSModules from 'react-css-modules';
import OrganizationsBtn from './organizations/OrganizationBtn';

const HomeWhoWeHelp = () => {
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
                    <h3 styleName='description'>
                        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. 
                        Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    </h3>
                    <div styleName='box'>
                        <div styleName='item'>Fundacja</div>
                        <div styleName='item'>Fundacja</div>
                        <div styleName='item'>Fundacja</div>
                    </div>
                    <div styleName='pagination'>
                        <div styleName='nr'>1</div>
                        <div styleName='nr'>2</div>
                        <div styleName='nr'>3</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CSSModules(HomeWhoWeHelp, styles);

// TODO każdy widok ładowany z firebase
