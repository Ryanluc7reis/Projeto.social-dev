import Joi from 'joi'

export const signupSchema = Joi.object({
  firstName : Joi.string().required().max(50), //  biblioteca 'Joi' é um validador de dados
  lastName : Joi.string().required().max(50),
  user : Joi.string().required().max(30),
  email: Joi.string().email({ tlds: {allow: false} }).required().max(100), // tanto paro  O FRONT END tanto paro o BACK END '.email({ tlds: {allow: false}})' é para saber se o email é valido (@gamil ,@hotmail,@outlook...)
  password : Joi.string().required().max(50).min(6),
})
