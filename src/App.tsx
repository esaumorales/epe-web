import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import AdminLoginPage from './modules/auth/pages/AdminLoginPage'
import UsersModulesPage from './modules/users/pages/UsersModulesPage'
import CampaignsPage from './modules/campaigns/pages/CampaignsPage'
import CampaignDetailsPage from './modules/campaigns/pages/CampaignDetailsPage'
import CampaignProvidersPage from './modules/campaigns/pages/CampaignProvidersPage'
import ProvidersPage from './modules/providers/pages/ProvidersPage'
import ClientsPage from './modules/clients/pages/ClientsPage'
import CertificationsPage from './modules/certifications/pages/CertificationsPage'
import CertificationsCreatePage from './modules/certifications/pages/CertificationsCreatePage'

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
        
        <Route 
          path="/proveedores" 
          element={
            isAuthenticated ? 
              <ProvidersPage /> : 
              <Navigate to="/login" />
          } 
        />

        <Route 
          path="/clientes" 
          element={
            isAuthenticated ? 
              <ClientsPage /> : 
              <Navigate to="/login" />
          } 
        />

        <Route 
          path="/certificaciones" 
          element={
            isAuthenticated ? 
              <CertificationsPage /> : 
              <Navigate to="/login" />
          } 
        />

        <Route 
          path="/certificaciones/nueva" 
          element={
            isAuthenticated ? 
              <CertificationsCreatePage /> : 
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
