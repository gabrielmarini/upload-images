const env = process.env.ENV || 'local'

const config = {
  local: {
    server: {
      port: process.env.PORT || 5000,
      log: process.env.LEVEL_LOG || 'dev'
    },
    mongo: {
      debug: true,
      URI: process.env.DB_URI || 'mongodb://localhost:27017/nodeAPI'
    }
  }
}

export default config[env]
