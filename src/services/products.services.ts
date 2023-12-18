import { errorMessage } from "../utils/helpers"
import { models } from "../models"

export const getAllProducts = async () => {
  const products = await models.products.getAllProducts()
  return products
}

export const getProductByID = async (id: number) => {
  const product = await models.products.getProductByID(id)
  if (!product) return errorMessage(404, "Product not found")
  return product
}

export const createProduct = async (name: string, quantity: number) => {
  const existingProduct = await models.products.findProductName(name)

  if (existingProduct) {
    return errorMessage(409, "Product already exists")
  }

  const createProduct = await models.products.createProduct(name, quantity)
  return createProduct
}
