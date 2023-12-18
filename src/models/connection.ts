import "dotenv/config"
import { createConnection } from "mysql2/promise"

async function connectToDatabase() {
  try {
    const connection = await createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE || "StoreManager",
    })
    return connection
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error)
    throw error
  }
}

export default connectToDatabase
