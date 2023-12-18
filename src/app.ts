import express from 'express'
import { Request, Response, NextFunction } from 'express'
import products from './routes/productsRouter'
import { errorMessage } from './utils/helpers'

const app = express()
app.use(express.json())

app.get('/', (_req: Request, res: Response) => {
  res.send('🛍️ Store Manager')
})

app.use('/products', products)

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  errorMessage(err, req, res, next)
})

export default app
