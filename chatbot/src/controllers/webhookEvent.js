import { markSeen, sendMessage, genText } from '../services/graphAPI.js'
import { postPollResult } from '../services/backendAPI.js'

export default (webhookEvent) => {
  if (webhookEvent.message) {
    const senderPsid = webhookEvent.sender.id
    const message = webhookEvent.message

    markSeen(senderPsid)
    // sendMessage(senderPsid, genText(`OK, ${senderPsid}`))

    if (message?.quick_reply?.payload) {
      postPollResult(senderPsid, message.quick_reply.payload)
      sendMessage(senderPsid, genText(`Got it "${message.text}", thank you 💩`))
    }
  }
}
