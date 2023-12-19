import { Product } from './products.types'

export interface SalesItem {
  id: number
  itemsSold: Product[]
}

export interface SalesItemUpdated {
  saleId: number
  itemUpdated: Product[]
}
