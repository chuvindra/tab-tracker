
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const port = 3000

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/status', (req, res) => res.send({message: 'Its your status page'} ))


app.post('/register', (req, res) =>{
    console.log(req.body.email)
    res.send({message: `hello ${req.body.email}! Your User has been registered`})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))