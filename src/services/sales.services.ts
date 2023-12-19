import { models } from '../models'
import { Product } from 'types/products.types'
import { SalesItem, SalesItemUpdated } from 'types/sales.types'

export const getAllSales = async () => {
  const sales = await models.sales.getAllSales()
  return sales
}

export const getSaleByID = async (id: number) => {
  const sale = await models.sales.getSaleByID(id)
  if (!sale || sale.length === 0) {
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

export const updateSale = async (id: number, products: Product[]) => {
  try {
    const saleExist = await models.sales.getSaleByID(id)

    if (!saleExist || saleExist.length === 0) {
      const error = { status: 404, message: 'Sale not found' }
      throw error
    }

    for (const product of products) {
      const existingProduct = await models.products.getProductByID(
        product.productId,
      )

      if (!existingProduct || existingProduct.length === 0) {
        const error = {
          status: 404,
          message: `Product ${product.productId} not found`,
        }
        throw error
      }

      await models.sales.updateSaleProduct(
        id,
        product.productId,
        product.quantity,
      )
    }

    const updated: SalesItemUpdated = { saleId: id, itemUpdated: products }
    return updated
  } catch (error) {
    throw new Error('Error updating sales')
  }
}
