import Joi from 'joi'

export const signupSchema = Joi.object({
  firstName : Joi.string().required().max(50).message('O campo "nome" pode ter no máximo {{#limit}} caracters.'), //  biblioteca 'Joi' é um validador de dados
  lastName : Joi.string().required().max(50).message('O campo "sobrenome" pode ter no máximo {{#limit}} caracters.'),
  user : Joi.string().required().max(30).message('O campo "usuário" pode ter no máximo {{#limit}} caracters.'),
  email: Joi.string().email({ tlds: {allow: false} }).required().max(100).message('O campo "email" pode ter no máximo {{#limit}} caracters.'), // tanto paro  O FRONT END tanto paro o BACK END '.email({ tlds: {allow: false}})' é para saber se o email é valido (@gamil ,@hotmail,@outlook...)
  password : Joi.string().required()
  .max(50).message('O campo "usuário" pode ter no máximo {{#limit}} caracters.')
  .min(6).message('O campo "senha" precisa ter no minimo {{#limit}} caracters.'),
})
export const loginSchema = Joi.object({
  userOrEmail : Joi.string().required(),
  password : Joi.string().required()
  .max(50).message('O campo "usuário" pode ter no máximo {{#limit}} caracters.')
  .min(6).message('O campo "senha" precisa ter no minimo {{#limit}} caracters.'),
  
})