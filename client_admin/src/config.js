import dotenv from 'dotenv'
dotenv.config()

// Required environment variables
const ENV_VARS = [
  'REACT_APP_API_URL',
  'REACT_APP_ADMIN_USERID',
  'REACT_APP_ADMIN_PASSWORD',
]

const config = {
  apiUrl: process.env.REACT_APP_API_URL,
  adminUserId: process.env.REACT_APP_ADMIN_USERID,
  adminPassword: process.env.REACT_APP_ADMIN_PASSWORD,
  isProduction: process.env.NODE_ENV === 'production',

  checkEnvVariables: function () {
    ENV_VARS.forEach(function (key) {
      if (!process.env[key]) {
        console.warn('WARNING: Missing the environment variable ' + key)
      }
    })
  },
}

export default config
