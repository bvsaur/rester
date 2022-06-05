import path from 'path'
import express, { Express } from 'express'
import cors from 'cors'
import { routes, UsersRouter } from '../routes'

export class Server {
  app: Express
  port: string

  constructor() {
    this.app = express()
    this.port = process.env.PORT || '8080'

    // Middleware
    this.middleware()
    // Routes
    this.routes()
  }

  middleware() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.static(path.join(__dirname, '../public')))
  }

  routes() {
    this.app.use(routes.users, UsersRouter())
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running at http://localhost:${process.env.PORT}`)
    })
  }
}
