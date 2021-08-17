import React, { useState } from 'react';
import CollectFormTitle from './CollectFormTitle';
import CollectFormOne from './CollectFormOne';
import CollectFormFour from './CollectFormFour';
import CollectBtn from './CollectBtn';
import styles from './CollectForm.module.scss';
import CSSModules from 'react-css-modules';

const CollectForm = () => {
    const [currStep, setCurrStep] = useState(0);
    const [title, setTitle] = useState([
        'Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.',
        'Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.',
        'Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.',
        'Podaj adres oraz termin odbioru rzeczy.'
    ]);
    const [data, setData] = useState({
        things: '',
        street: '',
        city: '',
        postCode: '',
        phone: '',
        date: '',
        time: '',
        note: ''
    })

    const handleNextStep = newData => {
        setData(data => ({ ...data, ...newData }));
        setCurrStep(step => step + 1);
    }

    const handlePrevStep = newData => {
        setData(data => ({ ...data, ...newData }));
        setCurrStep(step => step - 1);
    }

    const steps = [
        <CollectFormOne next={handleNextStep} data={data}/>,
        'step2',
        'step3',
        <CollectFormFour prev={handlePrevStep} data={data} />
    ];

    return (
        <section>
            <CollectFormTitle text={title[currStep]} />
            <div styleName='container'>
                <div styleName='step'>
                    Krok {currStep + 1}/4
                </div>
                <div styleName='form'>
                    {steps[currStep]}
                </div>
                {/* <CollectBtn /> */}
            </div>
        </section>
    );
}

export default CSSModules(CollectForm, styles);