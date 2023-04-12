const express = require('express')
const cors = require('cors')
const server = express()
// const app = express()

const data = require('./data/data.json');

server.use(cors())

// server.get('/', (req, res) => {
//     res.send('<h1>Home</h1>')
// })

server.get('/data', (req, res) => {
    res.json(data)
})

// server.get('/contato', (req, res) => {
//     res.send(`
//     <h1>Contato</h1>

//     <form action="/contato" method="POST">
//         <label for="email">Email:</label>
//         <input type="email" name="email" id="email">
//         <label>Mensagem:</label>
//         <textarea name="mensagem" id="mensagem"></textarea>
//         <input type="submit" value="Enviar">
//     </form>
//     `)
// })

server.listen(3003, () => {
    console.log('Servidor de pé em http://localhost:3003/data')
    console.log('Pra desligar o nosso servidor: ctrl + c')
})