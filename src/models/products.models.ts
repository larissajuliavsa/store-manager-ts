import { RowDataPacket } from "mysql2/promise"
import connectToDatabase from "./connection"

export const getAllProducts = async (): Promise<RowDataPacket[]> => {
  const connection = await connectToDatabase()
  const query = "SELECT * FROM StoreManager.products"

  const [products] = await connection.execute(query)
  return products as RowDataPacket[]
}
