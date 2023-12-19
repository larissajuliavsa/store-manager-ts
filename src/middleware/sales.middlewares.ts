import { Request, Response, NextFunction } from 'express'
import { z } from 'zod'

const schemaUpdate = z.object({
  productId: z.number().int(),
  quantity: z.number().int(),
})

const validateUpdate = ({
  productId,
  quantity,
}: {
  productId: number
  quantity: number
}) => {
  try {
    schemaUpdate.parse({ productId, quantity })
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
    body.forEach(
      ({ productId, quantity }: { productId: number; quantity: number }) => {
        validateUpdate({ productId, quantity })
      },
    )

    next()
  } catch (error: any) {
    handleValidationError(res, error)
  }
}
