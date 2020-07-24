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

app.get('*', (req, res) => {
    res.send({ hello: 'express'}).end()
})

app.listen(port, (err) => {
    if (err) console.log(err)
    else console.log(`Servidor corriendo en modo ${env} en http://localhost:${port}`)
})