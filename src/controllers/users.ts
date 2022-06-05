import { Request, Response } from 'express'
import { IUserBody, IUserParams } from '../interfaces'

export class UsersController {
  getUsers(_: Request, res: Response) {
    res.json({
      ok: true,
    })
  }

  createUser(req: Request<{}, {}, IUserBody>, res: Response) {
    const { name, age } = req.body
    res.json({
      ok: true,
      name,
      age,
    })
  }

  updateUser(req: Request<IUserParams>, res: Response) {
    const { id } = req.params
    res.json({
      ok: true,
      id,
    })
  }
}
