import React from 'react';
import './StepsItem.scss';

const StepsItem = ({ img, title, description }) => {
    return (
        <div className='steps__item'>
            <div className='steps__item__img'>
                <img className='steps__item__img__pic' src={img} alt={img} />
            </div>
            <h3 className='steps__item__title'>{title}</h3>
            <span className='steps__item__description'>{description}</span>
        </div>
    )
}

export default StepsItem;
