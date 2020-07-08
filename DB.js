const { Sequelize } = require('sequelize')

const DB = () => {
  return new Promise((resolve, reject) => {
    let instance
    if (!instance) {
      instance = new Sequelize({
        dialect: 'sqlite',
        storage: 'path/to/database.sqlite',
      })
      console.log(instance)
      instance
        .authenticate()
        .then(() => {
          console.log('Connection has been established successfully.')
          resolve(instance)
        })
        .catch((err) => {
          console.error('Unable to connect to the database:', err)
          reject()
        })
    }
    resolve(instance)
  })
}

module.exports = DB
