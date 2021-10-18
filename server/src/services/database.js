import config from '../config.js'
import bcrypt from 'bcrypt'
import pg from 'pg'

const { Pool } = pg

const pool = new Pool({
  connectionString: config.databaseUrl,
})

setTimeout(async () => {
  await pool.connect()
  console.log('Database connected')

  // default password hash
  const password = 'conculan'
  bcrypt.hash(password, config.saltRounds).then((hashed) => {
    console.log(`${password} -> ${hashed}`)
  })
}, 3000)

export default pool
