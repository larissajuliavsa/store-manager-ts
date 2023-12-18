import { Request, Response } from "express"
import { services } from "../services"

export const getAllProducts = async (_req: Request, res: Response) => {
  const products = await services.products.getAllProducts()
  return res.status(200).json(products)
}
