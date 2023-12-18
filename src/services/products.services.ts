import { models } from '../models'

export const getAllProducts = async () => {
  const products = await models.products.getAllProducts()
  return products
}

export const getProductByID = async (id: number) => {
  const product = await models.products.getProductByID(id)
  if (!product) {
    const error = { status: 404, message: 'Product not found' }
    throw error
  }
  return product
}

export const createProduct = async (name: string, quantity: number) => {
  const existingProduct = await models.products.findProductName(name)
  if (existingProduct) {
    const error = { status: 409, message: 'Product already exists' }
    throw error
  }

  const product = await models.products.createProduct(name, quantity)
  return product
}

export const updateProduct = async (
  id: number,
  name: string,
  quantity: number,
) => {
  const existingProduct = await models.products.getProductByID(id)
  if (!existingProduct) {
    const error = { status: 404, message: 'Product not found' }
    throw error
  }

  const update = await models.products.updateProduct(id, name, quantity)
  return update
}

export const deleteProduct = async (id: number) => {
  const existingProduct = await models.products.getProductByID(id)
  if (!existingProduct) {
    const error = { status: 404, message: 'Product not found' }
    throw error
  }
  const deleted = await models.products.deleteProduct(id)
  return deleted
}
