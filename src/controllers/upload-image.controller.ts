import { Router } from 'express'
import { uploadImage } from '../services/upload-image.service'
import multer from '../config/multer/multer.config'

const routes = Router()

routes.post('/image', multer.single('file'), uploadImage)

export default routes
