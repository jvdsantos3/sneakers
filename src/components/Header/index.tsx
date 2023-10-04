import { useContext } from 'react'

import { X } from 'phosphor-react'
import { HeaderContainer, HeaderContent, HeaderProfile } from './styles'
import { UserContext } from '../../contexts/AuthContext'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { user, isLogged, logout } = useContext(UserContext)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <strong>SNEAKERS</strong>
      </NavLink>

      <HeaderContent>
        {!isLogged && (
          <nav>
            <NavLink to="/login" title="Login">
              Login
            </NavLink>
            <NavLink to="/register" title="Cadastrar">
              Cadastrar
            </NavLink>
          </nav>
        )}

        <HeaderProfile>
          <p title="Nome do usuário">{user?.name}</p>
          {user?.name && (
            <button title="Sair" onClick={logout}>
              <X size={16} weight="bold" />
            </button>
          )}
        </HeaderProfile>
      </HeaderContent>
    </HeaderContainer>
  )
}
