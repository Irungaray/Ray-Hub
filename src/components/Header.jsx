import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar'

import '../assets/styles/components/Header.scss';

import logo from '../assets/icons/proyector.png';
import noUser from "../assets/icons/nouser.png";

const Header = props => {
    const { user } = props;

    const hasUser = Object.keys(user).length > 0

    return (
        <header className="header">

        <Link to="/">
            <img className="header__img" src={logo} alt="Logo de antiguo proyector" />
        </Link>

        <Link to="/">
            <h1 className="header__title">rAYhUB</h1>
        </Link>

        <div className="header__menu">
            <div className="header__menu--profile">
                {hasUser ?
                <img src={gravatar(user.email)} alt="Email"/> :

                <img src={noUser} alt="Sesión no iniciada" />
                }

                <div className="profile--p">
                    <p>Ingresar</p>
                </div>
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
    )
};

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(Header);