import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { Router } from 'react-router'
import { createBrowserHistory } from 'history';

import reducer from './reducers';
import initialState from './initialState'
import App from './routes/App';

// Llamando el historial del browser
const history = createBrowserHistory();

// Debug con Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Nuevo Store para pasarle al Provider
const store =  createStore(reducer, initialState, composeEnhancers());

// Inyectando los componentes importados al index.html
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,

    document.getElementById('app')
);