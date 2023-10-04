import { ReactNode, createContext, useState } from 'react'
import { api } from '../lib/axios'
import { getToken, removeTokens, storeTokens } from '../util/sessionMethods'

// interface User {
//   id: number
//   name: string
//   email: string
// }

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
  register: (data: CreateUserInput) => Promise<void>
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

  async function register(data: CreateUserInput) {
    await api.post('/users', data)
  }

  async function login(data: LoginInput) {
    await api.post('/sessions', data).then((response) => {
      storeTokens(response.data.token, response.data.refreshToken)
    })
  }

  async function logout() {
    removeTokens()
    setIsLogged(false)
  }

  async function getProfile() {
    await api.get('/account').then((response) => {
      console.log(response)
    })
  }

  return (
    <UserContext.Provider
      value={{ isLogged, register, login, logout, getProfile }}
    >
      {children}
    </UserContext.Provider>
  )
}
