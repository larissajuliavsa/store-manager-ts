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
