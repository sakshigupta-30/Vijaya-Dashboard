import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Videos from './pages/Videos';
import LiveClasses from './pages/LiveClasses';
import Plans from './pages/Plans';
import Settings from './pages/Settings';
import './index.css';
import { ProtectedRoute } from './components/ProtectedRoute';
import AuthPage from './pages/Auth';
import { AuthProvider } from './context/UserContext';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <AuthProvider>
    <div className="app-wrapper">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="main-content-area">
        <Routes>
          <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/videos" element={<ProtectedRoute><Videos /></ProtectedRoute>} />
          <Route path="/live-classes" element={<ProtectedRoute><LiveClasses /></ProtectedRoute>} />
          <Route path="/plans" element={<ProtectedRoute><Plans /></ProtectedRoute>} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
    </AuthProvider>
  );
};

export default App;
