import React from 'react'
import { Link } from 'react-router-dom';
import HomeHeader from '../home/HomeHeader';

const LogIn = () => {
    return (
        <section className='login'>
            <HomeHeader />
            <h1 className='login__title'>Zaloguj się</h1>
            <div className='login__data'>
                <form className='login__data__form'>
                    <label className='login__data__form__label'>
                        Email<br />
                        <input className='login__data__form__input' type='email' />
                    </label>
                    <label className='login__data__form__label'>
                        Hasło<br />
                        <input className='login__data__form__input' type='password' />
                    </label>
                </form>
                <div className='login__data__btn'>
                    <Link to='/rejestracja' className='login__data__btn__item'>Załóż konto</Link>
                    <Link to='/' className='login__data__btn__item'>Zaloguj się</Link>
                </div>
            </div>
        </section>
    )
}

export default LogIn;
