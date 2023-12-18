import { Request, Response, NextFunction } from "express"
import { services } from "../services"
import { ProductResponse } from "../types/products.types"

export const getAllProducts = async (_req: Request, res: Response) => {
  const products = await services.products.getAllProducts()
  return res.status(200).json(products)
}

export const getProductByID = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const parsedId = Number(id)
    const product = await services.products.getProductByID(parsedId)
    return res.status(200).json(product)
  } catch (err) {
    next(err)
  }
}

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, quantity } = req.body
    const result: ProductResponse = await services.products.createProduct(
      name,
      quantity,
    )

    if ("status" in result && "message" in result) {
      return res.status(result.status).json({ message: result.message })
    }

    return res.status(201).json(result)
  } catch (err) {
    next(err)
  }
}
