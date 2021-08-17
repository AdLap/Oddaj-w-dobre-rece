import React from 'react';

const CollectFormSummary = ({ prev, next, data }) => {

    return (
        <>
            <h2>Podsumowanie Twojej darowizny</h2>
            <h3>Oddajesz:</h3>
            <p>{data.bags} worków</p>
            <p>dla lokalizacji: {data.localization}</p>

            <h3>Adres odbioru:</h3>
            <p>Ulica {data.street}</p>
            <p>Miasto {data.city}</p>
            <p>Kod pocztowy {data.postCode}</p>
            <p>Numer telefonu {data.phone}</p>
            
            <button onClick={() => prev(data)}>Wstecz</button>
            <button type='submit' onClick={() => next(data)}>Dalej</button>
        </>
    );
}

export default CollectFormSummary;