import { models } from "../models"

export const getAllProducts = async () => {
  const products = await models.products.getAllProducts()
  return products
}
