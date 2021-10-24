import React, {useContext} from 'react'
import s from './Login.module.css'
import {Context} from "../index";

const Login = (props) => {
    const {auth,firebase} = useContext(Context)
    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} =  await auth.signInWithPopup(provider)
    }
    return (
        <section className={s.login__section}>
            <div className="container">
                <div className={s.block__login}>
                    <button onClick={login}>Войти с помощью Google</button>
                </div>
            </div>
        </section>
    )
}
export default Login;