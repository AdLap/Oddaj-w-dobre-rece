import React from 'react';
import CollectBtn from './CollectBtn';

const CollectFormSummary = ({ prev, next, data }) => {

    return (
        <>
            <h2>Podsumowanie Twojej darowizny</h2>
            <div className='collect__form__summary'>
                <div className='collect__form__summary__items'>
                    <h3>Oddajesz:</h3>
                    <div>{data.bags} worki, {data.type}, {data.helpGroups.join(', ')}</div>
                    <div>dla lokalizacji: {data.localization}, {data.localizationSpecific}</div>
                </div>

                <div className='collect__form__summary__adress'>
                    <h3>Adres odbioru:</h3>
                    <div>Ulica {data.street}</div>
                    <div>Miasto {data.city}</div>
                    <div>Kod pocztowy {data.postCode}</div>
                    <div>Numer telefonu {data.phone}</div>
                </div>

                <div className='collect__form__summary__date'>
                    <h3>Termin odbioru</h3>
                    <div>Data {data.date}</div>
                    <div>Godzina {data.time}</div>
                    <div>Uwagi dla kuriera {data.note}</div>
                </div>

                <div className='collect__form__btns'>
                    <CollectBtn onClick={() => prev(data)} text='Wstecz' />
                    <CollectBtn type='submit' onClick={() => next(data)} text='Potwierdź' />
                </div>
            </div>

        </>
    );
}

export default CollectFormSummary;
