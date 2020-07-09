const db = require('./models')

const { User } = db

const init = async () => {
  try {
    process.stdout.write('\nsyncing db...')
    // await db.sequelize.sync()
    process.stdout.write('done\n')
    const user = await User.create({
      email: 'wsfwefw@woo.com',
      password: 'poobrains'
    })
    console.log(Object.keys(user))
  } catch (err) {
    console.log(err)
  }
  // save a doc
}

init()
