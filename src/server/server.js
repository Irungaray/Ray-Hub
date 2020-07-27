import express from 'express'
import config from './config'
import webpack from 'webpack'

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

// Trayendo el HTML estático antes de poner la aplicación de React per se
app.get('*', (req, res) => {
    res.send(`
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
                <div id="app"></div>
                <script src="assets/app.js" type="text/javascript"></script>
            </body>
        </html>
    `).end()
})

app.listen(port, (err) => {
    if (err) console.log(err)
    else console.log(`Servidor corriendo en modo ${env} en http://localhost:${port}`)
})