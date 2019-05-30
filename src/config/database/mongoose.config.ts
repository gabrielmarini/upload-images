import mongoose from 'mongoose'
import config from '../server.config'

class DataBase {
  private static instance: DataBase;

  private constructor () {
    mongoose.set('debug', config.mongo.debug)
    mongoose.connect(config.mongo.URI, { useNewUrlParser: true })
  }

  public static getInstance (): DataBase {
    if (this.instance === undefined) {
      this.instance = new DataBase()
    }
    return this.instance
  }
}

export default DataBase
