import { Router } from 'express'
import Joi from '@hapi/joi'

import { validateRequest } from '../utils'

const router = Router()

const validation = validateRequest({
  accountId: Joi.string().required().label('Account ID'),
  oauthToken: Joi.string().required().label('OAuth Token'),
})

router.post('/signup', validation, async (req, res, next) => {
  const { username, password } = req.body
  try {
    const token = await attemptLogin(username, password)
    res.cookie(
      'token',
      token,
      { expires: new Date(Date.now() + 900000), httpOnly: true }
    )
  } catch (err) {
    throw Error(err)
  }
})

export default router
