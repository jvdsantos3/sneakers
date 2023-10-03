import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ProductProvider } from './contexts/ProductContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <ProductProvider>
          <Router />
        </ProductProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
