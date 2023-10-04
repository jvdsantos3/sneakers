import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ProductProvider } from './contexts/ProductContext'
import { UserProvider } from './contexts/AuthContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <UserProvider>
          <ProductProvider>
            <Router />
          </ProductProvider>
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
