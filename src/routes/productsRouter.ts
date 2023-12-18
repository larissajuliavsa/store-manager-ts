import express from 'express'
import { controllers } from '../controllers'
import { productMiddleware } from '../middleware/products.middlewares'

const products = express.Router()

products.use(express.json())

products.get('/', controllers.products.getAllProducts)
products.get('/:id', controllers.products.getProductByID)
products.post('/', productMiddleware, controllers.products.createProduct)
products.put('/:id', productMiddleware, controllers.products.updateProduct)
products.delete('/:id', controllers.products.deleteProduct)

export default products
