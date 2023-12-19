import { Request, Response, NextFunction } from 'express'
import { Product } from 'types/products.types'
import { z } from 'zod'

const schemaCreate = z.object({
  productId: z.number().int(),
  quantity: z.number().int(),
})

const validateProduct = ({ productId, quantity }: Product) => {
  try {
    schemaCreate.parse({ productId, quantity })
  } catch (error: any) {
    throw new Error(error.errors[0] || 'Invalid data provided')
  }
}

const handleValidationError = (res: Response, error: any) => {
  const errorMessage = error.errors?.[0]?.message || 'Invalid data provided'
  const errorType = error.errors && error.errors.length > 0 ? 422 : 400
  res.status(errorType).json({ message: errorMessage })
}

export const saleMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { body } = req
  try {
    body.forEach(({ productId, quantity }: Product) => {
      validateProduct({ productId, quantity })
    })

    next()
  } catch (error: any) {
    handleValidationError(res, error)
  }
}
