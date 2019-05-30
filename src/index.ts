import app from './app'
import config from './config/server.config'

app.listen(config.server.port, () => { console.log(`Server ruinning in port ${config.server.port}`) })
