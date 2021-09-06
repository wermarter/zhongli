import handleEvent from '../controllers/webhookEvent.js'
import config from '../config.js'

const verifyWebhook = (req, res) => {
  // Parse the query params
  const mode = req.query['hub.mode']
  const token = req.query['hub.verify_token']
  const challenge = req.query['hub.challenge']

  // Check if a token and mode is in the query string of the request
  if (mode && token) {
    // Check the mode and token sent is correct
    if (mode === 'subscribe' && token === config.verifyToken) {
      // Respond with the challenge token from the request
      console.log('WEBHOOK_VERIFIED')
      res.status(200).send(challenge)
    } else {
      // Respond with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403)
    }
  }
}

const processWebhook = (req, res) => {
  const body = req.body

  // Checks this is an event from a page subscription
  if (body.object === 'page') {
    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED')

    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach((entry) => {
      entry.messaging.forEach((webhook_event) => {
        handleEvent(webhook_event)
      })
    })
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404)
  }
}

export { verifyWebhook, processWebhook }
