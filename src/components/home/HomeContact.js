import React from 'react';
import Title from '../utility/Title';
import ContactForm from './contact/ContactForm';
import './HomeContact.scss';

const HomeContact = () => {
    return (
        <section className='contact' id='contact'>
            <div className='contact__bg-cover'>
                <div className='container-main contact__container'>
                    <div className='contact__container__box'>
                        <Title text='Skontaktuj się z nami' />
                        <ContactForm />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HomeContact;
