import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { Router } from 'react-router'
import { createBrowserHistory } from 'history';

import reducer from './reducers';
import App from './routes/App';

// Llamando el Browser History
const history = createBrowserHistory();

const preloadedState = window.__PRELOADED_STATE__;

// Debug con Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Nuevo Store para pasarle al Provider
const store =  createStore(reducer, preloadedState, composeEnhancers());

// Eliminando la API para que no pueda ser accedida por un usuario externo
delete window.__PRELOADED_STATE__;

// Inyectando los componentes importados al index.html
// Enrutando del lado del cliente con Router
ReactDOM.hydrate(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,

    document.getElementById('app')
);