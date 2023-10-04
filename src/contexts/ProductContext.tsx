import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'
import { UserContext } from './AuthContext'
import { ToastContext } from './ToastContext'

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
  deleteProduct: (productId: number) => Promise<void>
  fetchProducts: (page?: number, query?: string) => Promise<void>
  products: Product[]
  totalProducts: number
}

interface ProductProviderProps {
  children: ReactNode
}

export const ProductContext = createContext({} as ProductContextType)

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [totalProducts, setTotalProducts] = useState(0)

  const { isLogged } = useContext(UserContext)
  const { activeToast } = useContext(ToastContext)

  async function createProduct(data: CreateProductInput) {
    await api
      .post('products', data)
      .then(() => {
        fetchProducts()
        activeToast({
          variant: 'success',
          message: 'Produto cadastrado!',
        })
      })
      .catch(() => {
        activeToast({
          variant: 'danger',
          message: 'Erro ao cadastrar o produto, tente novamente!',
        })
      })
  }

  async function editProduct(productId: number, data: CreateProductInput) {
    await api
      .put(`products/${productId}`, data)
      .then(() => {
        fetchProducts()
        activeToast({
          variant: 'success',
          message: 'Produto editado!',
        })
      })
      .catch(() => {
        activeToast({
          variant: 'danger',
          message: 'Erro ao editar o produto, tente novamente!',
        })
      })
  }

  async function deleteProduct(productId: number) {
    await api
      .delete(`products/${productId}`)
      .then(() => {
        fetchProducts()
        activeToast({
          variant: 'success',
          message: 'Produto excluído!',
        })
      })
      .catch(() => {
        activeToast({
          variant: 'danger',
          message: 'Erro ao editar o produto, tente novamente!',
        })
      })
  }

  const fetchProducts = useCallback(async (page = 1, query?: string) => {
    const response = await api.get('products', {
      params: {
        page,
        query,
      },
    })

    setProducts(response.data.products)
    setTotalProducts(response.data.total)
  }, [])

  useEffect(() => {
    if (isLogged) {
      fetchProducts()
    }
  }, [fetchProducts, isLogged])

  return (
    <ProductContext.Provider
      value={{
        products,
        totalProducts,
        createProduct,
        editProduct,
        deleteProduct,
        fetchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
