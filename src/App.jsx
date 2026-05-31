import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage.jsx';
import Login from './pages/Auth/Login.jsx';
import Signup from './pages/Auth/Signup.jsx';
import Onboarding from './pages/onboarding/Onboarding.jsx';
import ClientLayout from './pages/Client/ClientLayout.jsx';
import ClientOverview from './pages/Client/overview/ClientOverview.jsx';
import ClientCharts from './pages/Client/charts/ClientCharts.jsx';
import ClientOrders from './pages/Client/orders/ClientOrders.jsx';
import ClientMenu from './pages/Client/menu/ClientMenu.jsx';
import ClientSettings from './pages/Client/settings/ClientSettings.jsx';
import AdminLayout from './pages/Admin/AdminLayout.jsx';
import AdminOverview from './pages/Admin/overview/AdminOverview.jsx';
import AdminClients from './pages/Admin/clients/Clients.jsx';
import AdminRequests from './pages/Admin/requests/Requests.jsx';
import AdminUsers from './pages/Admin/users/Users.jsx';
import AdminSettings from './pages/Admin/settings/Settings.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<Onboarding />} />

        <Route path="/client" element={<ClientLayout />}>
          <Route index element={<Navigate to="overview" replace />} />
          <Route path="overview" element={<ClientOverview />} />
          <Route path="charts" element={<ClientCharts />} />
          <Route path="orders" element={<ClientOrders />} />
          <Route path="menu" element={<ClientMenu />} />
          <Route path="settings" element={<ClientSettings />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="overview" replace />} />
          <Route path="overview" element={<AdminOverview />} />
          <Route path="clients" element={<AdminClients />} />
          <Route path="requests" element={<AdminRequests />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
