import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './CollectFormSummary.module.scss'
import CollectBtn from './CollectBtn'

const CollectFormSummary = ({ prev, next, data }) => {
	return (
		<>
			<h2>Podsumowanie Twojej darowizny</h2>
			<div styleName='summary'>
				<div styleName='summary__items'>
					<h3 styleName='summary__title'>Oddajesz:</h3>
					<div styleName='summary__items__desc'>
						<div styleName='summary__icon__one'></div>
						<div styleName='summary__items__text'>
							{data.bags} worki, {data.type}, {data.helpGroups.join(', ')}
						</div>
					</div>
					<div styleName='summary__items__desc'>
						<div styleName='summary__icon__two'></div>
						<div styleName='summary__items__text'>
							dla lokalizacji: {data.localization}, {data.localizationSpecific}
						</div>
					</div>
				</div>

				<div styleName='summary__adress'>
					<h3 styleName='summary__title'>Adres odbioru:</h3>
					<div styleName='summary__desc'>
						<span styleName='summary__key'>Ulica</span>
						<span styleName='summary__data'>{data.street}</span>
					</div>
					<div styleName='summary__desc'>
						<span styleName='summary__key'>Miasto</span>
						<span styleName='summary__data'>{data.city}</span>
					</div>
					<div styleName='summary__desc'>
						<span styleName='summary__key'>Kod pocztowy</span>
						<span styleName='summary__data'>
							{data.postCode}
						</span>
					</div>
					<div styleName='summary__desc'>
						<span styleName='summary__key'>Numer telefonu</span>
						<span styleName='summary__data'>{data.phone}</span>
					</div>
				</div>

				<div styleName='summary__date'>
					<h3 styleName='summary__title'>Termin odbioru</h3>
					<div styleName='summary__desc'>
						<span styleName='summary__key'>Data</span>
						<span styleName='summary__data'>{data.date}</span>
					</div>
					<div styleName='summary__desc'>
						<span styleName='summary__key'>Godzina</span>
						<span styleName='summary__data'>{data.time}</span>
					</div>
					<div styleName='summary__desc'>
						<span styleName='summary__key'>
							Uwagi
							<br />
							dla kuriera
						</span>
						<span styleName='summary__data'>{data.note}</span>
					</div>
				</div>

				<div className='collect__form__btns'>
					<CollectBtn onClick={() => prev(data)} text='Wstecz' />
					<CollectBtn
						type='submit'
						onClick={() => next(data)}
						text='Potwierdź'
					/>
				</div>
			</div>
		</>
	)
}

export default CSSModules(CollectFormSummary, styles)
