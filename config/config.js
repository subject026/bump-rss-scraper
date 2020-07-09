require('dotenv').config()

const makeConfig = () => {
  switch (process.env.MODE) {
    case 'development':
      return {
        dialect: 'postgresql',
        username: process.env.DEV_DB_USERNAME,
        password: process.env.DEV_DB_PASSWORD,
        database: process.env.DEV_DB_DATABASE,
        host: process.env.DEV_DB_HOST
      }
    case 'test':
      return {
        username: 'root',
        password: null,
        database: 'database_test',
        host: '127.0.0.1',
        dialect: 'postgresql'
      }
    case 'production':
      return {
        username: 'root',
        password: 'butterflywhenterrible',
        database: 'database_production',
        host: '127.0.0.1',
        dialect: 'postgresql'
      }
    default:
      return {}
  }
}

module.exports = makeConfig()
