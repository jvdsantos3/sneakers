import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'
import { useContext } from 'react'
import { ToastContext } from '../../contexts/ToastContext'

export function DefaultLayout() {
  const { toast } = useContext(ToastContext)

  return (
    <LayoutContainer>
      {toast}
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
