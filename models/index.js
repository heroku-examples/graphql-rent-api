'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)
const db = {}

let config, sequelize
if (process.env.NODE_ENV === 'local') {
  config = require(path.join(__dirname, '..', 'config/config'))
  sequelize = new Sequelize(config.database, config.username, config.password, config)
} else {
  config = process.env.DATABASE_URL + '?ssl=true'
  sequelize = new Sequelize(config)
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
