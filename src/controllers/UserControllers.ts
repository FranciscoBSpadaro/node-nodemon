import { Request, Response } from 'express'

import User from '../schemas/User'

class UserController {
  public async index (_req: Request, res: Response): Promise<Response> {
    const users = await User.find()
    return res.json(users)
  }

  // criar usuário
  public async store (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)
    console.log(user.fullName)
    return res.json(user)
  }
}

export default new UserController()
