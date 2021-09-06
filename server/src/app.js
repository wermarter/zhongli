import express from 'express'
import morgan from 'morgan'

import ChatbotRouter from './routes/chatbot.js'
import APIRouter from './routes/api.js'

const app = express()
app.use(express.json())
app.use(morgan('dev'))

app.use('/chatbot', ChatbotRouter)
app.use('/api', APIRouter)

export default app
