import { models } from "../models"

const errorMessage = (status: number, message: string) => ({
  status,
  message,
})

export const getAllProducts = async () => {
  const products = await models.products.getAllProducts()
  return products
}

export const getProductId = async (id: number) => {
  const productId = await models.products.getProductId(id)

  if (!productId) throw errorMessage(404, "Product not found")

  return productId
}
