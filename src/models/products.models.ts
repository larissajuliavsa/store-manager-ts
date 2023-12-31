import { RowDataPacket } from 'mysql2'
import connectToDatabase from './connection'

export const getAllProducts = async () => {
  try {
    const connection = await connectToDatabase()
    const query = 'SELECT * FROM StoreManager.products'
    const [products] = await connection.execute(query)
    return products
  } catch (error: any) {
    throw new Error(`Error fetching all products: ${error.message}`)
  }
}

export const getProductByID = async (id: number) => {
  try {
    const connection = await connectToDatabase()
    const query = 'SELECT * FROM StoreManager.products WHERE id = ?'
    const [results] = await connection.execute(query, [id])
    const rows = results as RowDataPacket[]
    const product = rows[0]
    return product
  } catch (error: any) {
    throw new Error(`Error fetching product by ID: ${error.message}`)
  }
}

export const findProductName = async (name: string) => {
  try {
    const connection = await connectToDatabase()
    const query = 'SELECT * FROM StoreManager.products WHERE name = ?'
    const [results] = await connection.execute(query, [name])
    const rows = results as RowDataPacket[]
    const product = rows[0]
    return product || null
  } catch (error: any) {
    throw new Error('Product not found')
  }
}

export const createProduct = async (name: string, quantity: number) => {
  try {
    const connection = await connectToDatabase()
    const query =
      'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?)'
    const [result] = await connection.execute(query, [name, quantity])

    if ('insertId' in result) {
      const { insertId: id } = result as { insertId: number }
      return { id, name, quantity }
    }

    throw new Error('Error creating the product')
  } catch (error) {
    throw new Error('Error creating the product')
  }
}

export const updateProduct = async (
  id: number,
  name: string,
  quantity: number,
) => {
  try {
    const connection = await connectToDatabase()
    const query =
      'UPDATE StoreManager.products SET name = ?, quantity = ? WHERE id = ?;'
    const [result] = await connection.execute(query, [name, quantity, id])
    const isUpdated = 'affectedRows' in result && result.affectedRows > 0

    if (isUpdated) {
      return { id, name, quantity }
    }

    throw new Error("Unable to update the product or the product doesn't exist")
  } catch (error) {
    throw new Error('Unable to update the product')
  }
}

export const deleteProduct = async (id: number) => {
  try {
    const connection = await connectToDatabase()
    const query = 'DELETE FROM StoreManager.products WHERE id = ?;'
    const [result] = await connection.execute(query, [id])
    const isDeleted = 'affectedRows' in result && result.affectedRows > 0

    if (isDeleted) {
      return { message: 'Product deleted successfully' }
    }

    throw new Error("Unable to delete the product or the product doesn't exist")
  } catch (error) {
    throw new Error('Unable to delete the product')
  }
}
