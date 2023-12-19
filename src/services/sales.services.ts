import { models } from '../models'
import { Product } from 'types/products.types'
import { SalesItem } from 'types/sales.types'

export const getAllSales = async () => {
  const sales = await models.sales.getAllSales()
  return sales
}

export const getSaleByID = async (id: number) => {
  const sale = await models.sales.getSaleByID(id)
  if (!sale) {
    const error = { status: 404, message: 'Sale not found' }
    throw error
  }
  return sale
}

export const createSales = async (product: Product[]): Promise<SalesItem> => {
  try {
    const saleID: number = await models.sales.createSaleID()
    await Promise.all(
      product.map(async ({ productId, quantity }) => {
        await models.sales.createSales(saleID, productId, quantity)
      }),
    )
    const sale: SalesItem = { id: saleID, itemsSold: [...product] }
    return sale
  } catch (error) {
    throw new Error('Error creating sales')
  }
}
