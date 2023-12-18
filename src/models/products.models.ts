/* eslint-disable @typescript-eslint/no-explicit-any */
import { RowDataPacket } from "mysql2"
import connectToDatabase from "./connection"

export const getAllProducts = async () => {
  try {
    const connection = await connectToDatabase()
    const query = "SELECT * FROM StoreManager.products"
    const [products] = await connection.execute(query)
    return products
  } catch (error: any) {
    throw new Error(`Erro ao obter todos os produtos: ${error.message}`)
  }
}

export const getProductId = async (id: number) => {
  try {
    const connection = await connectToDatabase()
    const query = "SELECT * FROM StoreManager.products WHERE id = ?"
    const [results] = await connection.execute(query, [id])
    const rows = results as RowDataPacket[]
    const productId = rows[0]
    return productId
  } catch (error: any) {
    throw new Error(`Erro ao obter o produto pelo ID: ${error.message}`)
  }
}
