import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar'

import { logoutRequest } from '../actions'

import '../assets/styles/components/Header.scss';

import logo from '../assets/icons/proyector.png';
import noUser from "../assets/icons/nouser.png";

const Header = props => {
    const { user } = props;

    const hasUser = Object.keys(user).length > 0

    const handleLogout = () => {
        props.logoutRequest({})
    }

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
                    <div className="profile--p">
                        <p>Perfil</p>
                    </div>

                    {hasUser ?
                    <img src={gravatar(user.email)} alt="Email"/> :

                    <img src={noUser} alt="Sesión no iniciada" />
                    }
                </div>

                <ul>
                    {hasUser ?
                        <li>
                            <Link to="/Cuenta">Cuenta</Link>
                        </li> : null
                    }

                    {hasUser ?
                        <li>
                            <a href="#logout" onClick={handleLogout}>Cerrar Sesión </a>
                        </li> :
                        <li>
                            <Link to="/Login">Iniciar sesión</Link>
                        </li>
                    }

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

const mapDispatchToProps = {
    logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);