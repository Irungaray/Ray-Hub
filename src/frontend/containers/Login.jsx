/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loginUser } from '../actions';

import '../assets/styles/components/Login.scss';

import facebookIcon from '../assets/icons/facebook.png';
import twitterIcon from '../assets/icons/twitter.png';
import googleIcon from '../assets/icons/google.png';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginUser(form, '/');
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>

          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />

          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />

          <button className='button' type='submit'>
            Iniciar sesión
          </button>

          <div className='login__container--remember-me'>
            <label>
              <input
                type='checkbox'
                id='cbox1'
                value='checkbox'
              />
              {' '}
              Recuérdame
            </label>
            <a href='/'>
              <br />
              Olvidé mi contraseña
            </a>
          </div>

        </form>

        <section className='login__container--social-media'>
          <div>
            <img src={facebookIcon} alt='Facebook' />
            Inicia sesión con Facebook
          </div>
          <div>
            <img src={twitterIcon} alt='Twitter' />
            Inicia sesión con Twitter
          </div>
          <div>
            <img src={googleIcon} alt='Google' />
            Inicia sesión con Google
          </div>
        </section>

        <p className='login__container--register'>
          ¿No tenes cuenta?
          {' '}
          {' '}
          <Link to='Register'>
            Regístrate
          </Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginUser,
};

Login.propTypes = {
  loginUser: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Login);
