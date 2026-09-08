
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import './App.css'
import AdminLoginPage from './modules/auth/pages/AdminLoginPage'
import UsersModulesPage from './modules/users/pages/UsersModulesPage'
import CampaignsPage from './modules/campaigns/pages/CampaignsPage'
import CampaignDetailsPage from './modules/campaigns/pages/CampaignDetailsPage'
import CampaignProvidersPage from './modules/campaigns/pages/CampaignProvidersPage'
import ProvidersPage from './modules/providers/pages/ProvidersPage'
import ClientsPage from './modules/clients/pages/ClientsPage'
import CertificationsPage from './modules/certifications/pages/CertificationsPage'
import DashboardLayout from '@/shared/layout/DashboardLayout'

// Persistent layout wrapper for authenticated routes
const ProtectedLayout = ({ isAuthenticated, onLogout }: { isAuthenticated: boolean, onLogout: () => void }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return (
    <DashboardLayout onLogout={onLogout}>
      <Outlet />
    </DashboardLayout>
  );
};

const AUTH_STORAGE_KEY = 'epe_auth'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem(AUTH_STORAGE_KEY) === 'true'
  )

  useEffect(() => {
    localStorage.setItem(AUTH_STORAGE_KEY, String(isAuthenticated))
  }, [isAuthenticated])

  const handleLogout = () => setIsAuthenticated(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/login" 
          element={!isAuthenticated ? <AdminLoginPage onLogin={() => setIsAuthenticated(true)} /> : <Navigate to="/modules" />} 
        />
        
        <Route element={<ProtectedLayout isAuthenticated={isAuthenticated} onLogout={handleLogout} />}>
          <Route path="/modules" element={<UsersModulesPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/campaigns/:id" element={<CampaignDetailsPage />} />
          <Route path="/campaigns/:id/providers" element={<CampaignProvidersPage />} />
          <Route path="/proveedores" element={<ProvidersPage />} />
          <Route path="/clientes" element={<ClientsPage />} />
          <Route path="/certificaciones" element={<CertificationsPage />} />
        </Route>
        
        <Route path="/" element={<Navigate to="/modules" />} />
        <Route path="*" element={<Navigate to="/modules" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
