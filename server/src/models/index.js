const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const Config = require('../config/config')
const db = {}

const sequelize = new Sequelize({
    database: Config.db.database,
    user: Config.db.user,
    password: Config.db.password,
    dialect: Config.db.options.dialect,
    host: Config.db.options.host,
    storage: Config.db.options.storage
})

fs
    .readdirSync(__dirname)
    .filter((file) => 
        file !== 'index.js'
    )
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname,file))
        //db[model.name] = model
    })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db