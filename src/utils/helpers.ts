/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express'

export const errorMessage = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const { status = 500, message = 'Internal Server Error' } = err

  res.status(status).json({ error: { message } })
}
