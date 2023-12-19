import { RowDataPacket } from 'mysql2'
import connectToDatabase from './connection'

export const getAllSales = async () => {
  try {
    const connection = await connectToDatabase()
    const query = `SELECT salePrd.sale_id AS 'saleId', sale.date, salePrd.product_id AS 'productId', salePrd.quantity FROM StoreManager.sales_products AS salePrd JOIN StoreManager.sales AS sale ON salePrd.sale_id = sale.id ORDER BY 'saleId' 'productId'`
    const [sales] = await connection.execute(query)
    return sales
  } catch (error: any) {
    throw new Error(`Error fetching all sales: ${error.message}`)
  }
}

export const getSaleByID = async (id: number) => {
  try {
    const connection = await connectToDatabase()
    const query = `SELECT sale.date, salePrd.product_id AS 'productId', salePrd.quantity FROM StoreManager.sales_products AS salePrd JOIN StoreManager.sales AS sale ON salePrd.sale_id = sale.id WHERE salePrd.sale_id = ? ORDER BY 'productId'`
    const [results] = await connection.execute(query, [id])
    const rows = results as RowDataPacket[]
    const sale = rows[0]
    return sale
  } catch (error: any) {
    throw new Error(`Error fetching sale by ID: ${error.message}`)
  }
}

export const createSaleID = async () => {
  try {
    const connection = await connectToDatabase()
    const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW())'
    const [result] = await connection.execute(query)

    if ('insertId' in result) {
      const { insertId: id } = result as { insertId: number }
      return id
    }

    throw new Error('Error creating the sale')
  } catch (error: any) {
    throw new Error(`Error creating sale id: ${error.message}`)
  }
}

export const createSales = async (
  id: number,
  productId: number,
  quantity: number,
) => {
  try {
    const connection = await connectToDatabase()
    const query = `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)`
    const [sale] = await connection.execute(query, [id, productId, quantity])
    return sale
  } catch (error: any) {
    throw new Error(`Error creating sale: ${error.message}`)
  }
}
