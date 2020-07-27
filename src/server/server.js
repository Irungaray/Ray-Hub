// Importando dependencias desde el frontend hacia el servidor
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { renderRoutes } from 'react-router-config'
import { StaticRouter } from 'react-router-dom'
import serverRoutes from '../frontend/routes/serverRoutes'
import reducer from '../frontend/reducers';
import initialState from '../frontend/initialState'

import express from 'express'
import config from './config'
import webpack from 'webpack'
import Layout from '../frontend/components/Layout';

const { env, port } = config
const app = express()

if (env === 'development') {
    console.log(env)
    const webpackConfig = require('../../webpack.config')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const compiler = webpack(webpackConfig)
    const serverConfig = { port: `${port}`, hot: true }

    app.use(webpackDevMiddleware(compiler, serverConfig))
    app.use(webpackHotMiddleware(compiler))
}

// Definiendo las 2 funciones principales (setResponse y renderApp) para el SSR
const setResponse = (html, preloadedState) => {
    return (`
        <!DOCTYPE html>
        <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="assets/app.css" type="text/css" />
                <title>ReactHub</title>
            </head>

            <body>
                <!-- Inyectando desde index.js los componentes importados -->
                <div id="app">${html}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
                </script>
                <script src="assets/app.js" type="text/javascript"></script>
            </body>
        </html>
    `)
}

const renderApp = (req, res) => {
    const store =  createStore(reducer, initialState);
    // Inyectando la API desde el server para que no tenga que ser cargada por el cliente
    const preloadedState = store.getState()
    const html = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
                <Layout>
                    {renderRoutes(serverRoutes)}
                </Layout>
            </StaticRouter>
        </Provider>,
    );

    res.send(setResponse(html, preloadedState))
};

// Llamando la función que renderiza la app
app.get('*', renderApp)

app.listen(port, (err) => {
    if (err) console.log(err)
    else console.log(`Servidor corriendo en modo ${env} en http://localhost:${port}`)
})