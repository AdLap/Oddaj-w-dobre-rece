import React from 'react';
import styles from './ContactFormSuccess.module.scss';
import CSSModules from 'react-css-modules';

const ContactFormSuccess = () => {
    return (
        <h2 styleName='success'>
            Wiadomość została wysłana!<br />
            Wkrótce się skontaktujemy.
        </h2>
    )
}

export default CSSModules(ContactFormSuccess, styles);
