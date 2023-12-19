export type ProductResponse =
  | { status: number; message: string }
  | { id: number; name: string; quantity: number }

export interface Product {
  productId: number
  quantity: number
}
