import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import AdminLoginPage from './modules/auth/pages/AdminLoginPage'
import UsersModulesPage from './modules/users/pages/UsersModulesPage'
import CampaignsPage from './modules/campaigns/pages/CampaignsPage'
import CampaignDetailsPage from './modules/campaigns/pages/CampaignDetailsPage'
import CampaignProvidersPage from './modules/campaigns/pages/CampaignProvidersPage'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogout = () => setIsAuthenticated(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/login" 
          element={
            !isAuthenticated ? 
              <AdminLoginPage onLogin={() => setIsAuthenticated(true)} /> : 
              <Navigate to="/modules" />
          } 
        />
        
        <Route 
          path="/modules" 
          element={
            isAuthenticated ? 
              <UsersModulesPage onLogout={handleLogout} /> : 
              <Navigate to="/login" />
          } 
        />
        
        <Route 
          path="/campaigns" 
          element={
            isAuthenticated ? 
              <CampaignsPage /> : 
              <Navigate to="/login" />
          } 
        />
        
        <Route 
          path="/campaigns/:id" 
          element={
            isAuthenticated ? 
              <CampaignDetailsPage /> : 
              <Navigate to="/login" />
          } 
        />
        
        <Route 
          path="/campaigns/:id/providers" 
          element={
            isAuthenticated ? 
              <CampaignProvidersPage /> : 
              <Navigate to="/login" />
          } 
        />
        
        <Route path="/" element={<Navigate to="/modules" />} />
        <Route path="*" element={<Navigate to="/modules" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
