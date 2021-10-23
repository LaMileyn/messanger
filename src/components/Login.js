import React from 'react'
import s from './Login.module.css'

const Login = (props) => {
    return (
        <section className={s.login__section}>
            <div className="container">
                <div className={s.block__login}>
                    <button>Войти с помощью Google</button>
                </div>
            </div>
        </section>
    )
}
export default Login;