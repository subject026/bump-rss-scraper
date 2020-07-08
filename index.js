require('dotenv').config()

const DB = require('./DB')

const init = async () => {
  const SQL = await DB()

  console.log(SQL)
}

init()
