const express = require('express');
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.use("/", require('../src/routes/index.js'))

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('<h1>Hola mundo</h1>')
})

app.listen('3001', () => {
    console.log('Server is running!')
})