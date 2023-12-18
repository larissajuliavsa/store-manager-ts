/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from "express"
import { z } from "zod"

const schemaCreate = z.object({
  name: z.string().min(5),
  quantity: z.number().int(),
})

export const createProductMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, quantity } = req.body

  try {
    schemaCreate.parse({ name, quantity })
    next()
  } catch (error: any) {
    const errorMessage = error.errors?.[0]?.message || "Invalid data provided"
    const errorType = error.errors && error.errors.length > 0 ? 422 : 400
    res.status(errorType).json({ message: errorMessage })
  }
}
