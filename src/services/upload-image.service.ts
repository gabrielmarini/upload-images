import { Request, Response } from 'express'

export const uploadImage = (req: Request, res: Response): void => {
  res.json(req.file)
}
