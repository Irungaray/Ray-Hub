import React from 'react';
import { Link } from 'react-router-dom'
import '../assets/styles/components/Header.scss';

import logo from '../assets/icons/proyector.png';
import noUser from "../assets/icons/nouser.png";

const Header = () => (
    <header className="header">

    <Link to="/">
        <img className="header__img" src={logo} alt="Logo de antiguo proyector" />
    </Link>

    <Link>
        <h1 className="header__title">rAYhUB</h1>
    </Link>

    <div className="header__menu">
        <div className="header__menu--profile">
            <div className="profile--p">
              <p>Ingresar</p>
            </div>
            <img src={noUser} alt="Varón" />
        </div>

        <ul>
            <li>
                <Link to="/Login">Iniciar sesión</Link>
            </li>
            <li>
                <Link to="/Register">Regístrate</Link>
            </li>
        </ul>
    </div>
</header>
);

export default Header;