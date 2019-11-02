import Joi from '@hapi/joi'

// eslint-disable-next-line import/prefer-default-export
export const validateRequest = (schema) => (req, res, next) => {
  const joiSchema = Joi.object(schema)
  const validated = joiSchema.validate(req.body)
  return next()
}
