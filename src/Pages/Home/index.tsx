import {
  HomeContainer,
  Pagination,
  PaginationButton,
  ProductActionsSection,
  ProductSearch,
  ProductsContainer,
} from './styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { CaretLeft, CaretRight, MagnifyingGlass, X } from 'phosphor-react'
import { ProductCard } from '../../components/ProductCard'
import { NewProductDialog } from '../../components/NewProductDialog'
import { useContext, useState, useEffect } from 'react'
import { ProductContext } from '../../contexts/ProductContext'
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js'

const queryFormSchema = z.object({
  query: z.string(),
})

export type QueryFormSchema = z.infer<typeof queryFormSchema>

export function Home() {
  const { products, totalProducts, fetchProducts } = useContext(ProductContext)

  const [page, setPage] = useState(1)

  const { register, handleSubmit, watch } = useForm<QueryFormSchema>({
    resolver: zodResolver(queryFormSchema),
  })

  const queryValue = watch('query')

  const pagesCount = Math.ceil(totalProducts / 20)

  function handleSearchProduct(data: QueryFormSchema) {
    fetchProducts(1, data.query)
  }

  function handleCancelSearchProduct() {
    fetchProducts()
  }

  function handleNextPage() {
    if (page < pagesCount) {
      setPage(page + 1)
    }
  }

  function handlePreviousPage() {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  function handleChangePage(page: number) {
    setPage(page)
  }

  useEffect(() => {
    if (page) {
      fetchProducts(page)
    }
  }, [page, fetchProducts])

  return (
    <HomeContainer>
      <ProductActionsSection>
        <NewProductDialog />

        <ProductSearch onSubmit={handleSubmit(handleSearchProduct)}>
          <button type="submit">
            <MagnifyingGlass size={16} weight="bold" />
          </button>
          <input
            type="text"
            placeholder="Pesquise um produto"
            {...register('query')}
          />
          {String(queryValue).length > 0 && (
            <button type="button" onClick={handleCancelSearchProduct}>
              <X size={16} weight="bold" />
            </button>
          )}
        </ProductSearch>
      </ProductActionsSection>

      <ProductsContainer>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            brand={product.brand}
            price={product.price}
            size={product.size}
            amount={product.amount}
          />
        ))}
      </ProductsContainer>

      <Pagination>
        <PaginationButton onClick={handlePreviousPage}>
          <CaretLeft size={20} weight="bold" />
        </PaginationButton>
        {page === pagesCount && (
          <PaginationButton onClick={() => handleChangePage(page - 2)}>
            {page - 2}
          </PaginationButton>
        )}
        {page > 1 && (
          <PaginationButton onClick={() => handleChangePage(page - 1)}>
            {page - 1}
          </PaginationButton>
        )}
        <PaginationButton variant="active">{page}</PaginationButton>
        {page < pagesCount && (
          <PaginationButton onClick={() => handleChangePage(page + 1)}>
            {page + 1}
          </PaginationButton>
        )}
        {page === 1 && (
          <PaginationButton onClick={() => handleChangePage(page + 2)}>
            {page + 2}
          </PaginationButton>
        )}
        <PaginationButton onClick={handleNextPage}>
          <CaretRight size={20} weight="bold" />
        </PaginationButton>
      </Pagination>
    </HomeContainer>
  )
}
