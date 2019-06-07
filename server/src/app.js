
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
//const port = 3000

app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const urlencodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json()


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/status', (req, res) => res.send({message: 'Its your status page'} ))

const register = require('./routes')
register(app);


sequelize.sync().then(()=>{
    app.listen(config.port, () => console.log(`Testing app listening on port ${config.port}!`))
});
