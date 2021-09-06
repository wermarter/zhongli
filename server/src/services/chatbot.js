import axios from 'axios'

import config from '../config.js'

const chatbotAPI = axios.create({
  baseURL: config.chatbotServerURL,
})

export const sendPoll = async (pollID, recipients, title, options) => {
  try {
    await chatbotAPI.post('/api/poll', {
      pollID,
      recipients,
      title,
      options,
    })
  } catch(err) {
    console.log(err)
  }
}
