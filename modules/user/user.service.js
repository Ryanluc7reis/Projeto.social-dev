import { hashPassword } from "../../utils/bcrypt"

import User from './user.model'

export const signupUser = async (body) => { //quando a função é somente export const ,deve importar assim : import {signupUser} from 
  try {
    const user = {
      ...body,
      password: hashPassword(body.password)
    }
    const dbUser = await User.create(user)
    return dbUser
  } catch (err) {    
    throw err
  }
}
 