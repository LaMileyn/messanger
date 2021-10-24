import React, {useContext} from 'react'
import s from './NavBar.module.css'
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Redirect} from "react-router-dom";

const NavBar = () =>{
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    return (
        <section className={s.section__navbar}>
            <div className={s.container__navbar}>
                {user ?<button onClick={() => auth.signOut()}>Выйти</button> : <button onClick={() => <Redirect to='/login' />}>Войти</button>}
            </div>
        </section>
    )
}
export default  NavBar;