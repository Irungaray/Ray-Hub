import React from 'react';
import { Link } from 'react-router-dom'
import '../assets/styles/components/Login.scss'

import facebookIcon from '../assets/icons/facebook.png'
import twitterIcon from '../assets/icons/twitter.png'
import googleIcon from '../assets/icons/google.png'

const Login = () => (
    <section className="login">
        <section className="login__container">
            <h2>Inicia sesión</h2>
            <form action="" className="login__container--form">
                <input className="input" type="text" placeholder="Correo" />
                <input className="input" type="password" placeholder="Contraseña" />
                <button className="button">
                    <Link to="/">
                        Iniciar sesión
                    </Link>
                </button>
                <div className="login__container--remember-me">
                    <label>
                        <input type="checkbox" id="cbox1" value="checkbox" />Recuérdame
                    </label>
                    <a href="/">Olvidé mi contraseña</a>
                </div>
            </form>
            <section className="login__container--social-media">
                <div><img src={facebookIcon} alt="Facebook" />Inicia sesión con Facebook</div>
                <div><img src={twitterIcon} alt="Twitter" />Inicia sesión con Twitter</div>
                <div><img src={googleIcon} alt="Google" />Inicia sesión con Google</div>
            </section>
            <p className="login__container--register">
                ¿No tenes cuenta?
                <Link to="Register">
                    Regístrate
                </Link>
            </p>
        </section>
    </section>
);

export default Login;