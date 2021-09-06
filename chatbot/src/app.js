import express from 'express'

import WebHookRouter from './routes/webhook.js'
import APIRouter from './routes/api.js'

const app = express()

app.use('/webhook', WebHookRouter)
app.use('/api', APIRouter)

export default app
