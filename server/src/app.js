
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
//const port = 3000

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/status', (req, res) => res.send({message: 'Its your status page'} ))

require('./routes')(app)


sequelize.sync()
.then(()=>{
    app.listen(config.port, () => console.log(`Testing app listening on port ${config.port}!`))
});
