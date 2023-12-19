import { models } from '../models'

export const getAllSales = async () => {
  const sales = await models.sales.getAllSales()
  return sales
}
