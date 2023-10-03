import {
  HomeContainer,
  ProductActionsSection,
  ProductSearch,
  ProductsContainer,
} from './styles'

import { MagnifyingGlass } from 'phosphor-react'
import { Header } from '../../components/Header'
import { ProductCard } from '../../components/ProductCard'
import { NewProductDialog } from '../../components/NewProductDialog'
import { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'

export function Home() {
  const { products } = useContext(ProductContext)

  return (
    <HomeContainer>
      <Header />
      <ProductActionsSection>
        <NewProductDialog />

        <ProductSearch>
          <button>
            <MagnifyingGlass size={16} weight="bold" />
          </button>
          <input type="text" placeholder="Pesquise um produto" />
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
    </HomeContainer>
  )
}
