import { Router } from 'express'
import Joi from '@hapi/joi'

import { validateRequest } from '../utils'

const router = Router()

const validation = validateRequest({
  username: Joi.string().required(),
  password: Joi.string().required(),
})

router.post('/', validation, async (req, res) => {
  console.log('body: ', req.body)
  res.json({ success: true })
  // const { username, password } = req.body
  // try {
  //   // const token = await attemptLogin(username, password)
  //   res.cookie(
  //     'token',
  //     token,
  //     { expires: new Date(Date.now() + 900000), httpOnly: true }
  //   )
  // } catch (err) {
  //   throw Error(err)
  // }
})

export default router
