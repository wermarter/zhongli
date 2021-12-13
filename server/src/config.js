import dotenv from 'dotenv'
dotenv.config()

// Required environment variables
const ENV_VARS = [
  'CHATBOT_SERVER_URL',
  'DATABASE_URL',
  'JWT_SECRET',
  'TOKEN_EXPIRES',
  'SALT_ROUNDS',
]

export default {
  isProduction: process.env.NODE_ENV === 'production',
  chatbotServerURL: process.env.CHATBOT_SERVER_URL,
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  tokenExpires: +process.env.TOKEN_EXPIRES,
  saltRounds: +process.env.SALT_ROUNDS,
  port: process.env.PORT || 5000,

  checkEnvVariables: function () {
    ENV_VARS.forEach(function (key) {
      if (!process.env[key]) {
        console.warn('WARNING: Missing the environment variable ' + key)
      }
    })
  },
}
