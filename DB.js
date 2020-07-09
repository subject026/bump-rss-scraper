const { Sequelize } = require('sequelize')

const config = require('./config/config')

const DB = () => {
  let instance
  if (!instance) {
    instance = new Sequelize({
      dialect: config.dialect,
      database: config.database,
      username: config.username,
      password: config.password,
      host: config.host
    })
  }
  return instance
}

module.exports = { getInstance: DB }
