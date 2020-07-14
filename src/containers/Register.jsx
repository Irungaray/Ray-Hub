import React from 'react';
import '../assets/styles/components/Login.scss'

import facebookIcon from '../assets/icons/facebook.png'
import twitterIcon from '../assets/icons/twitter.png'
import googleIcon from '../assets/icons/google.png'

const Register = () => (
    <section className="login">
    <section className="login__container">
        <h2>Registrate</h2>
        <form action="" className="login__container--form">
            <input className="input" type="text" placeholder="Nombre de usuario" />
            <input className="input" type="text" placeholder="Correo" />
            <input className="input" type="password" placeholder="Contraseña" />
            <div className="login__container--remember-me">
                <label>
                    <input type="checkbox" id="cbox1" value="checkbox" />Recuérdame
                </label>
            </div>
            <button className="button"><a href="maquetacion.html">Registrate</a></button>
        </form>
        <section className="login__container--social-media">
            <div><img src={facebookIcon} alt="Facebook" />Inicia sesión con Facebook</div>
            <div><img src={twitterIcon} alt="Twitter" />Inicia sesión con Twitter</div>
            <div><img src={googleIcon} alt="Google" />Inicia sesión con Google</div>
        </section>
    </section>
</section>
);

export default Register;