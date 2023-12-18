import { Request, Response, NextFunction } from "express"
import { services } from "../services"

export const getAllProducts = async (_req: Request, res: Response) => {
  const products = await services.products.getAllProducts()
  return res.status(200).json(products)
}

export const getProductId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const parsedId = Number(id)
    const productId = await services.products.getProductId(parsedId)
    return res.status(200).json(productId)
  } catch (err) {
    next(err)
  }
}
