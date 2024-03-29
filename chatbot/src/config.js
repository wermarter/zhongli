import dotenv from 'dotenv'
dotenv.config()

// Required environment variables
const ENV_VARS = [
  'PAGE_ID',
  'APP_ID',
  'PAGE_ACCESS_TOKEN',
  'APP_SECRET',
  'VERIFY_TOKEN',
  'BACKEND_URL',
]

export default {
  // Messenger Platform API
  apiDomain: 'https://graph.facebook.com',
  apiVersion: 'v11.0',

  // Page and Application information
  pageId: process.env.PAGE_ID,
  appId: process.env.APP_ID,
  pageAccesToken: process.env.PAGE_ACCESS_TOKEN,
  appSecret: process.env.APP_SECRET,
  verifyToken: process.env.VERIFY_TOKEN,

  // Preferred port (default to 7000)
  port: process.env.PORT || 7000,

  // Backend URL
  backendURL: process.env.BACKEND_URL,

  // Base URL for Messenger Platform API calls
  get apiUrl() {
    return `${this.apiDomain}/${this.apiVersion}`
  },

  checkEnvVariables: function () {
    ENV_VARS.forEach(function (key) {
      if (!process.env[key]) {
        console.warn('WARNING: Missing the environment variable ' + key)
      } else {
        // Check that urls use https
        if (['APP_URL'].includes(key)) {
          const url = process.env[key]
          if (!url.startsWith('https://')) {
            console.warn(
              'WARNING: Your ' + key + ' does not begin with "https://"'
            )
          }
        }
      }
    })
  },
}
