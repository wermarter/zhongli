import config from './config.js'
import app from './app.js'

// Check if all environment variables are set
config.checkEnvVariables()

const listener = app.listen(config.port, () => {
  console.log(`The app is listening on port ${listener.address().port}`)
})
