import React from 'react';
import CollectBtn from './CollectBtn';

const CollectFormSummary = ({ prev, next, data }) => {

    return (
        <>
            <h2>Podsumowanie Twojej darowizny</h2>
            <div className='collect__form__summary'>
                <div className='collect__form__summary__items'>
                    <h3 className='collect__form__summary__title'>Oddajesz:</h3>
                    <div className='collect__form__summary__items__desc'>
                        <div className='collect__form__summary__icon__one'></div>
                        {data.bags} worki, {data.type}, {data.helpGroups.join(', ')}
                    </div>
                    <div className='collect__form__summary__items__desc'>
                        <div className='collect__form__summary__icon__two'></div>
                        dla lokalizacji: {data.localization}, {data.localizationSpecific}
                    </div>
                </div>

                <div className='collect__form__summary__adress'>
                    <h3 className='collect__form__summary__title'>Adres odbioru:</h3>
                    <div className='collect__form__summary__desc'>
                        <span className='collect__form__summary__data'>Ulica</span>
                        <span className='collect__form__summary__data'>{data.street}</span>
                    </div>
                    <div className='collect__form__summary__desc'>
                        <span className='collect__form__summary__key'>Miasto</span>
                        <span className='collect__form__summary__data'>{data.city}</span>
                    </div>
                    <div className='collect__form__summary__desc'>
                        <span className='collect__form__summary__key'>Kod pocztowy</span>
                        <span className='collect__form__summary__data'>{data.postCode}</span>
                    </div>
                    <div className='collect__form__summary__desc'>
                        <span className='collect__form__summary__key'>Numer telefonu</span>
                        <span className='collect__form__summary__data'>{data.phone}</span>
                    </div>
                </div>

                <div className='collect__form__summary__date'>
                    <h3 className='collect__form__summary__title'>Termin odbioru</h3>
                    <div className='collect__form__summary__desc'>
                        <span className='collect__form__summary__key'>Data</span>
                        <span className='collect__form__summary__data'>{data.date}</span>
                    </div>
                    <div className='collect__form__summary__desc'>
                        <span className='collect__form__summary__key'>Godzina</span>
                        <span className='collect__form__summary__data'>{data.time}</span>
                    </div>
                    <div className='collect__form__summary__desc'>
                        <span className='collect__form__summary__key'>Uwagi<br />dla kuriera</span>
                        <span className='collect__form__summary__data'>{data.note}</span>
                    </div>
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
