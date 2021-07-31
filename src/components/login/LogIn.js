import React from 'react'
import HomeHeader from '../home/HomeHeader';

const LogIn = () => {
    return(
        <section className='login'>
            <HomeHeader />
            <h1 className='login__title'>Zaloguj się</h1>
            <div className='login__data'>
                <form className='login__data__form'>
                    <label className='login__data__form__label'>
                        Email<br/>
                        <input className='login__data__form__input' type='email' />
                    </label>
                    <label className='login__data__form__label'>
                        Hasło<br/>
                        <input className='login__data__form__input' type='password' />
                    </label>
                </form>
                <div className='login__data__btn'>
                    <button className='login__data__btn__item'>Załóż konto</button>
                    <button className='login__data__btn__item'>Zaloguj się</button>
                </div>
            </div>
        </section>
    )
}

export default LogIn;
