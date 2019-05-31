import { Router } from 'express'
import routers from './controllers/upload-image.controller'

const route = Router()
route.use('/uploads', routers)

export default route
