/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';

import '../assets/styles/components/Login.scss';

import facebookIcon from '../assets/icons/facebook.png';
import twitterIcon from '../assets/icons/twitter.png';
import googleIcon from '../assets/icons/google.png';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Regístrate</h2>
        <form action='' className='login__container--form' onSubmit={handleSubmit}>
          <input
            name='name'
            className='input'
            type='text'
            placeholder='Nombre de usuario'
            onChange={handleInput}
          />

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

          <div className='login__container--remember-me'>
            <label>
              <input
                type='checkbox'
                id='cbox1'
                value='checkbox'
              />
              Recuérdame
            </label>
          </div>

          <button className='button' type='button'>
            <Link to='/'>
              Registrate
            </Link>
          </button>
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
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
