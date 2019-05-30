import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import config from './config/server.config'
import database from './config/database/mongoose.config'

class App {
    public express: express.Application

    public constructor () {
      this.express = express()

      database.getInstance()
      this.middlewares()
    }

    private middlewares (): void {
      this.express.use(morgan(config.server.log))
      this.express.use(express.json())
      this.express.use(cors())
    }
}

export default new App().express
