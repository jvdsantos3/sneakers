import { ProductCardContainer } from './styles'

export function ProductCard() {
  return (
    <ProductCardContainer>
      <img
        src="https://cactusteals.com.br/cdn/shop/products/6cbb861a307a74e8d0a8d16f16cc6844.jpg?v=1683919672"
        alt=""
      />

      <div>
        <span>Nike</span>
        <p>NIKE SB DUNK LOW HUF SAN FRANCISCO</p>
        <strong>R$ 2.000</strong>
      </div>
    </ProductCardContainer>
  )
}
