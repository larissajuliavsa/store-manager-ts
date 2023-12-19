import { Request, Response } from 'express'
import { services } from '../services'

export const getAllSales = async (_req: Request, res: Response) => {
  const sales = await services.sales.getAllSales()
  return res.status(200).json(sales)
}
