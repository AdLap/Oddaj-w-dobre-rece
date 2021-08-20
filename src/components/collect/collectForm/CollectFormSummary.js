import React from 'react';
import CollectBtn from './CollectBtn';


const CollectFormSummary = ({ prev, next, data }) => {

    return (
        <>
            <h2>Podsumowanie Twojej darowizny</h2>
            <h3>Oddajesz:</h3>
            <p>{data.bags} worki, {data.type}, {data.helpGroups.join(', ')}</p>
            <p>dla lokalizacji: {data.localization}, {data.localizationSpecific}</p>

            <h3>Adres odbioru:</h3>
            <p>Ulica {data.street}</p>
            <p>Miasto {data.city}</p>
            <p>Kod pocztowy {data.postCode}</p>
            <p>Numer telefonu {data.phone}</p>

            <div className='collect__form__btns'>
                <CollectBtn onClick={() => prev(data)} text='Wstecz' />
                <CollectBtn type='submit' onClick={() => next(data)} text='Potwierdź' />
            </div>
        </>
    );
}

export default CollectFormSummary;