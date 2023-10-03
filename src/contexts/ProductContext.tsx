import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface Product {
  id: number
  image: string
  name: string
  size: number
  brand: string
  price: number
  amount: number
  createdAt: Date
}

interface CreateProductInput {
  image: string
  name: string
  size: number
  brand: string
  price: number
  amount: number
}

interface ProductContextType {
  createProduct: (data: CreateProductInput) => Promise<void>
  editProduct: (productId: number, data: CreateProductInput) => Promise<void>
  fetchProducts: (page: number) => Promise<void>
  products: Product[]
}

interface ProductProviderProps {
  children: ReactNode
}

export const ProductContext = createContext({} as ProductContextType)

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>([])

  async function createProduct(data: CreateProductInput) {
    await api.post('products', data).then(() => {
      fetchProducts()
    })
  }

  async function editProduct(productId: number, data: CreateProductInput) {
    await api.put(`products/${productId}`, data).then(() => {
      fetchProducts()
    })
  }

  const fetchProducts = useCallback(async (page = 1) => {
    const response = await api.get('products', {
      params: {
        page,
      },
    })

    setProducts(response.data.products)
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <ProductContext.Provider
      value={{ products, createProduct, editProduct, fetchProducts }}
    >
      {children}
    </ProductContext.Provider>
  )
}
