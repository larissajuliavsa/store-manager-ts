import express from "express"
import { controllers } from "../controllers"
import { createProductMiddleware } from "../middleware/products.middlewares"

const products = express.Router()

products.use(express.json())

products.get("/", controllers.products.getAllProducts)
products.get("/:id", controllers.products.getProductByID)
products.post("/", createProductMiddleware, controllers.products.createProduct)

export default products
