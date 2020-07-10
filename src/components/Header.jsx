import React from 'react';

const Header = () => (
    <header className="header">
    <img className="header__img" src="../assets/icons/proyector.png" alt="Logo de antiguo proyector" />
    <h1 className="header__title">rAYhUB</h1>

    <div className="header__menu">
        <div className="header__menu--profile">
            <div className="profile--p">
              <p>Ingresar</p>
            </div>
            <img src="../assets/icons/nouser.png" alt="Varón" />
        </div>

        <ul>
            <li><a href="login.html">Iniciar sesión</a></li>
            <li><a href="register.html">Registrarse</a></li>
        </ul>
    </div>
</header>
);

export default Header;