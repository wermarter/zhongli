import dotenv from "dotenv";
dotenv.config();

// Required environment variables
const ENV_VARS = ["CHATBOT_SERVER_URL"];

export default {
  chatbotServerURL: process.env.CHATBOT_SERVER_URL,
  port: process.env.PORT || 5000,

  checkEnvVariables: function () {
    ENV_VARS.forEach(function (key) {
      if (!process.env[key]) {
        console.warn("WARNING: Missing the environment variable " + key);
      }
    });
  },
};
