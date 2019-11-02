import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import config from './config'
import logger from './logger'

import {
  login,
  logout,
  signup,
} from './routes'

const { port, mongoURI } = config.default.core
const app = express()

mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) logger.log({ level: 'error', message: `DB CONNECTION FAILED: ${err}` })
    else logger.log({ level: 'info', message: `DB CONNECTION SUCCESS${mongoURI}` })
  },
)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/login', login)
app.use('/logout', logout)
app.use('/signup', signup)

app.listen(port, () => logger.log({ level: 'info', message: `Example app listening on port ${port}!` }))
