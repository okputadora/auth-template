import Joi from '@hapi/joi'

// eslint-disable-next-line import/prefer-default-export
export const validateRequest = (schema) => (req, res, next) => {
  const joiSchema = Joi.object(schema)
  console.log(req.body)
  const validated = joiSchema.validate(req.body)
  console.log({ validated })
  return next()
}
