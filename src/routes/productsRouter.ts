import express from "express"
import { controllers } from "../controllers"

const products = express.Router()

products.use(express.json())

products.get("/", controllers.products.getAllProducts)

export default products