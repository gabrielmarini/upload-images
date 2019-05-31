import multer from 'multer'
import path from 'path'
import crypto from 'crypto'
import { env } from '../server.config'

const storage = {
  local: multer.diskStorage({
    destination: (req, file, cb): void => {
      cb(null, path.resolve(__dirname, '..', '..', '..', 'tmp', 'uploads'))
    },
    filename: (req, file, cb): void => {
      crypto.randomBytes(16, (err, hash): void => {
        if (err) cb(err, '')

        const name = `${hash.toString('hex')}-${file.originalname}`

        cb(null, name)
      })
    }
  })
}

export default multer({
  dest: path.resolve(__dirname, '..', '..', '..', 'tmp', 'uploads'),
  limits: {
    fieldSize: 2 * 1024 * 1024
  },
  storage: storage[env],
  fileFilter: (req, file, cb): void => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif'
    ]

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Invalid file type.'), false)
    }
  }
})
