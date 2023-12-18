import { Request, Response, NextFunction } from "express"
import { services } from "../services"
// import { ProductResponse } from "../types/products.types"

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
    const result = await services.products.createProduct(name, quantity)

    return res.status(201).json(result)
  } catch (err) {
    next({ status: 500, message: "Internal Server Error" })
  }
}

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const { name, quantity } = req.body
    const parsedId = Number(id)
    const update = await services.products.updateProduct(
      parsedId,
      name,
      quantity,
    )
    return res.status(200).json(update)
  } catch (err) {
    next(err)
  }
}
