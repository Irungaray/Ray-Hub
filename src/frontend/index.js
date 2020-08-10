import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import reducer from './reducers';
import App from './routes/App';

// Llamando el historial del browser
const history = createBrowserHistory();

// Importando el preloadedState(API)
const preloadedState = window.__PRELOADED_STATE__;

// Debug con Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Nuevo Store para pasarle al Provider
const store = createStore(reducer, preloadedState, composeEnhancers(applyMiddleware(thunk)));

// Borrando el preloadedState para que no sea visto por usuarios externos
delete window.__PRELOADED_STATE__;

// Hidratando el string recibido desde server.js
ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,

  document.getElementById('app'),
);
