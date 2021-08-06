import React from 'react';
import Title from '../../utility/Title';
import styles from './HomeContact.module.scss';
import CSSModules from 'react-css-modules';
import ContactForm from './ContactForm';

const HomeContact = () => {
    return (
        <section styleName='contact' id='contact'>
            <div styleName='bg-cover'>
                <div styleName='container'>
                    <Title text='Skontaktuj się z nami' />
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default CSSModules(HomeContact, styles);
