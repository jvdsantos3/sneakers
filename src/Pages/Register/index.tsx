import { useContext } from 'react'
import { UserContext } from '../../contexts/AuthContext'

export function Register() {
  const { register, login, getProfile } = useContext(UserContext)

  function handleRegister() {
    const data = {
      name: 'Teste',
      email: 'teste2@example.com',
      password: '123456',
    }

    register(data)
  }

  function handleLogin() {
    const data = {
      email: 'teste2@example.com',
      password: '123456',
    }

    login(data)
  }

  function handleGetProfile() {
    getProfile()
  }

  return (
    <div>
      <button onClick={handleRegister}>Cadastrar</button>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGetProfile}>Perfil</button>
    </div>
  )
}
