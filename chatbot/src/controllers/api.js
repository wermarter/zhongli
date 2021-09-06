import { sendMessage, genQuickReply, genText } from '../services/graphAPI.js'

const makePoll = (req, res) => {
  const { pollID, recipients, title, options } = req.body
  const response = genQuickReply(
    title,
    options.map((option, index) => ({
      title: option,
      payload: `${pollID}@${index}`,
    }))
  )

  //TODO: Delay between API call?
  recipients.forEach((PSID) => {
    sendMessage(PSID, response, 'CONFIRMED_EVENT_UPDATE')
  })

  res.sendStatus(200)
}

const makeAnnouncement = (req, res) => {
  const { recipients, content } = req.body
  const response = genText(content)

  recipients.forEach((PSID) => {
    sendMessage(PSID, response, 'ACCOUNT_UPDATE')
  })

  res.sendStatus(200)
}

export { makePoll, makeAnnouncement }
