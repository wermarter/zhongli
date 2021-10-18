import { v4 as uuidv4 } from 'uuid'

import { sendPoll } from '../../services/chatbot.js'

export const createPoll = async (req, res) => {
  const { recipients, title, options } = req.body
  await sendPoll(uuidv4(), recipients, title, options)
  res.sendStatus(200)
}
