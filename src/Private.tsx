import { ReactNode, useContext } from 'react'
import { UserContext } from './contexts/AuthContext'
import { Navigate } from 'react-router-dom'

interface PrivateProps {
  children: ReactNode
}

export function Private({ children }: PrivateProps) {
  const { isLogged } = useContext(UserContext)

  if (!isLogged) {
    return <Navigate to="/login" />
  }

  return children
}
