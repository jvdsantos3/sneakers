import { ReactNode, createContext, useState, useEffect } from 'react'
import { api } from '../lib/axios'
import { getToken, removeTokens, storeTokens } from '../util/sessionMethods'
import { useNavigate } from 'react-router-dom'

interface User {
  id: number
  name: string
  email: string
}

interface CreateUserInput {
  name: string
  email: string
  password: string
}

interface LoginInput {
  email: string
  password: string
}

interface UserContextType {
  isLogged: boolean
  user: User | null
  registerUser: (data: CreateUserInput) => Promise<void>
  login: (data: LoginInput) => Promise<void>
  logout: () => void
  getProfile: () => Promise<void>
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UserProvider({ children }: UserProviderProps) {
  const [isLogged, setIsLogged] = useState(!!getToken())
  const [user, setUser] = useState<User | null>(null)

  const navigate = useNavigate()

  async function registerUser(data: CreateUserInput) {
    await api.post('/users', data).then(() => {
      navigate('/login')
    })
  }

  async function login(data: LoginInput) {
    await api.post('/sessions', data).then((response) => {
      storeTokens(response.data.token, response.data.refreshToken)
      setIsLogged(true)
      getProfile()
      navigate('/products')
    })
  }

  async function logout() {
    removeTokens()
    setIsLogged(false)
    setUser(null)
    navigate('/login')
  }

  async function getProfile() {
    await api.get('/account').then((response) => {
      setUser(response.data.user)
    })
  }

  useEffect(() => {
    if (isLogged) {
      getProfile()
    }
  }, [isLogged])

  return (
    <UserContext.Provider
      value={{ isLogged, user, registerUser, login, logout, getProfile }}
    >
      {children}
    </UserContext.Provider>
  )
}
