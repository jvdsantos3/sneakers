import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Register } from './Pages/Register'

export function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/products" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  )
}
