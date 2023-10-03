import { MagnifyingGlass } from 'phosphor-react'
import { Header } from '../../components/Header'
import { ProductCard } from '../../components/ProductCard'
import { HomeContainer, ProductActionsSection, ProductSearch } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <ProductActionsSection>
        <button>Adicionar produto</button>

        <ProductSearch>
          <button>
            <MagnifyingGlass size={16} weight="bold" />
          </button>
          <input type="text" placeholder="Pesquise um produto" />
        </ProductSearch>
      </ProductActionsSection>
      <ProductCard />
    </HomeContainer>
  )
}
