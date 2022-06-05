import { Router } from 'express'
import { UsersController } from '../controllers'

export const UsersRouter = (): Router => {
  const router = Router()

  const users = new UsersController()

  router.get('/', users.getUsers)
  router.post('/', users.createUser)
  router.put('/:id', users.updateUser)

  return router
}
