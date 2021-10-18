import express from 'express'
import morgan from 'morgan'

import { handleLogin } from './controllers/auth.js'

import APIRouter from './routes/api.js'

const app = express()
app.use(express.json())
app.use(morgan('dev'))

app.post('/login', handleLogin)
app.use('/api', APIRouter)

export default app
