import { Request, Response, NextFunction } from 'express'
import { services } from '../services'

export const getAllSales = async (_req: Request, res: Response) => {
  const sales = await services.sales.getAllSales()
  return res.status(200).json(sales)
}

export const getSaleByID = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const parsedId = Number(id)
    const sale = await services.sales.getSaleByID(parsedId)
    return res.status(200).json(sale)
  } catch (err) {
    next(err)
  }
}

export const createSales = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const products = req.body
    const sale = await services.sales.createSales(products)
    return res.status(201).json(sale)
  } catch (err) {
    next(err)
  }
}
