import express from 'express'
import config from './config'

const { env, port } = config
const app = express()

if (env === 'development') {
    console.log(env)
}

app.get('*', (req, res) => {
    res.send({ hello: 'express'}).end()
})

app.listen(port, (err) => {
    if (err) console.log(err)
    else console.log(`Servidor corriendo en modo ${env} en http://localhost:${port}`)
})