import React, { useState } from 'react';
import CollectFormTitle from './CollectFormTitle';
import CollectFormOne from './CollectFormOne';
import CollectFormTwo from './CollectFormTwo';
import CollectFormTree from './CollectFormTree';
import CollectFormFour from './CollectFormFour';
import CollectFormSummary from './CollectFormSummary';
import CollectFormThanks from './CollectFormThanks';
import styles from './CollectForm.module.scss';
import CSSModules from 'react-css-modules';

const CollectForm = () => {
    const [currStep, setCurrStep] = useState(0);

    const [title] = useState([
        'Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.',
        'Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.',
        'Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.',
        'Podaj adres oraz termin odbioru rzeczy.'
    ]);

    const [data, setData] = useState({
        things: '',
        bags: '',
        localization: '',
        street: '',
        city: '',
        postCode: '',
        phone: '',
        date: '',
        time: '',
        note: ''
    });

    const handleNextStep = newData => {
        setData(data => ({ ...data, ...newData }));
        setCurrStep(step => step + 1);
    }

    const handlePrevStep = newData => {
        setData(data => ({ ...data, ...newData }));
        setCurrStep(step => step - 1);
    }

    const handleSubmit = formData => {
        alert(JSON.stringify(formData))
        setData({
            things: '',
            bags: '',
            localization: '',
            street: '',
            city: '',
            postCode: '',
            phone: '',
            date: '',
            time: '',
            note: ''
        });
        setCurrStep(step => step + 1);
    }

    const steps = [
        <CollectFormOne next={handleNextStep} data={data} />,
        <CollectFormTwo prev={handlePrevStep} next={handleNextStep} data={data} />,
        <CollectFormTree prev={handlePrevStep} next={handleNextStep} data={data} />,
        <CollectFormFour prev={handlePrevStep} next={handleNextStep} data={data} />,
        <CollectFormSummary prev={handlePrevStep} next={handleSubmit} data={data} />,
        <CollectFormThanks />
    ];

    console.log('data::', data);

    return (
        <section>
            {currStep < 4 && <CollectFormTitle text={title[currStep]} />}
            <div styleName='container'>
                {currStep < 4 && <div styleName='step'>
                    Krok {currStep + 1}/4
                </div>}
                <div styleName='form'>
                    {steps[currStep]}
                </div>
            </div>
        </section>
    );
}

export default CSSModules(CollectForm, styles);