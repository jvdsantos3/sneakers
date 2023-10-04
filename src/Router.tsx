import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Register } from './Pages/Register'
import { DefaultLayout } from './Layouts/DefaultLayout'
import { Login } from './Pages/Login'
import { Private } from './Private'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route
          index
          element={
            <Private>
              <Home />
            </Private>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}
