const express = require('express')
const cors = require('cors')
const server = express()

const endPoint = require('../frontend/src/config/config')
const data = require('./data/data.json');

const port = endPoint.config.port

server.use(cors());
console.log(endPoint);

server.get('/data', (req, res) => {
    res.json(data)
});

server.listen(port, () => {
    console.log('Pra desligar o nosso servidor: ctrl + c')
});