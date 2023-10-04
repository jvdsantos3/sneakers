import { useContext } from 'react'

import { X } from 'phosphor-react'
import { HeaderContainer, HeaderProfile } from './styles'
import { UserContext } from '../../contexts/AuthContext'

export function Header() {
  const { user, logout } = useContext(UserContext)

  return (
    <HeaderContainer>
      <strong>SNEAKERS</strong>

      <HeaderProfile>
        {user?.name}
        {user?.name && (
          <button title="Sair" onClick={logout}>
            <X size={16} weight="bold" />
          </button>
        )}
      </HeaderProfile>
    </HeaderContainer>
  )
}
