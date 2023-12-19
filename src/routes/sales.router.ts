import express from 'express'
import { controllers } from '../controllers'

const sales = express.Router()

sales.use(express.json())

sales.get('/', controllers.sales.getAllSales)

export default sales
