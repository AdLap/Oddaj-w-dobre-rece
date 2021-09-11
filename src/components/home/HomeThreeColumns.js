import React from 'react';

const HomeThreeColumns = () => {

    return (
        <section className='columns'>
           <div className='columns__container'>
               <div className='columns__container__item'>
                   <h2 className='columns__container__item__number'>10</h2>
                   <h3 className='columns__container__item__title'>oddanych worków</h3>
                   <span className='columns__container__item__description'>
                       Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                   </span>
               </div>
               <div className='columns__container__item'>
                   <h2 className='columns__container__item__number'>5</h2>
                   <h3 className='columns__container__item__title'>wspartych organizacji</h3>
                   <span className='columns__container__item__description'>
                       Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                   </span>
               </div>
               <div className='columns__container__item'>
                   <h2 className='columns__container__item__number'>7</h2>
                   <h3 className='columns__container__item__title'>zorganizowanych zbiórek</h3>
                   <span className='columns__container__item__description'>
                       Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                   </span>
               </div>
           </div>
        </section>
    )
}

export default HomeThreeColumns;
