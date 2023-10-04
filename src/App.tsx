import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ProductProvider } from './contexts/ProductContext'
import { UserProvider } from './contexts/AuthContext'
import { CookiesProvider } from 'react-cookie'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <CookiesProvider>
          <UserProvider>
            <ProductProvider>
              <Router />
            </ProductProvider>
          </UserProvider>
        </CookiesProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
