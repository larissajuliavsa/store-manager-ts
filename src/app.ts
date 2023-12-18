import express from "express"
import { Request, Response } from "express"
import products from "./routes/productsRouter"

const app = express()
app.use(express.json())

app.get("/", (_req: Request, res: Response) => {
  res.send("hello world")
})

app.use("/products", products)

export default app
