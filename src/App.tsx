import { useState } from 'react'
import './App.css'
import AdminLoginPage from './modules/auth/pages/AdminLoginPage'
import UsersModulesPage from './modules/users/pages/UsersModulesPage'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <>
      {isAuthenticated ? (
        <UsersModulesPage />
      ) : (
        <AdminLoginPage onLogin={() => setIsAuthenticated(true)} />
      )}
    </>
  )
}

export default App
