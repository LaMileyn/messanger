import React from 'react'
import s from './NavBar.module.css'

const NavBar = () =>{
    const user = true
    return (
        <section className={s.section__navbar}>
            <div className={s.container__navbar}>
                {user ? <button>Выйти</button> : <button>Войти</button>}
            </div>
        </section>
    )
}
export default  NavBar;