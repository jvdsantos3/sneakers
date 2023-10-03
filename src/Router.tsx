import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'

export function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  )
}
