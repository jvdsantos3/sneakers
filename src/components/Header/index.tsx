import { X } from 'phosphor-react'
import { HeaderContainer, HeaderProfile } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <strong>SNEAKERS</strong>

      <HeaderProfile>
        João Vitor dos Santos
        <button title="Sair">
          <X size={16} weight="bold" />
        </button>
      </HeaderProfile>
    </HeaderContainer>
  )
}
