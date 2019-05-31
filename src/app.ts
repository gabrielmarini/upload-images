import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import config from './config/server.config'
import database from './config/database/mongoose.config'
import routes from './router'

class App {
    public express: express.Application

    public constructor () {
      this.express = express()

      database.getInstance()
      this.middlewares()
      this.routes()
    }

    private middlewares (): void {
      this.express.use(morgan(config.server.log))
      this.express.use(express.json())
      this.express.use(express.urlencoded({ extended: true }))
      this.express.use(cors())
    }

    private routes (): void {
      this.express.use(routes)
    }
}

export default new App().express
