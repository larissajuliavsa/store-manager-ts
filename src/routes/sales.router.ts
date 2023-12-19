import express from 'express'
import { controllers } from '../controllers'
import { saleMiddleware } from '../middleware/sales.middlewares'

const sales = express.Router()

sales.use(express.json())

sales.get('/', controllers.sales.getAllSales)
sales.get('/:id', controllers.sales.getSaleByID)
sales.post('/', saleMiddleware, controllers.sales.createSales)
sales.put('/:id', saleMiddleware, controllers.sales.updateSales)

export default sales
