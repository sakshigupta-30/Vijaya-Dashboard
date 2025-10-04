import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Videos from "./pages/Videos";
import LiveClasses from "./pages/LiveClasses";
import Plans from "./pages/Plans";
import Settings from "./pages/Settings";
import AuthPage from "./pages/Auth";
import AppLayout from "./components/AppLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useAuth } from "./context/UserContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  const {user} = useAuth();
  return (
    <>
    <Toaster/>
    <Routes>
      
      {/* Auth page without sidebar */}
      {/* <Route path="/auth" element={<AuthPage />} /> */}

      {/* Layout with sidebar */}
      <Route element={user?<AppLayout />:<AuthPage />}>
        <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/videos" element={<ProtectedRoute><Videos /></ProtectedRoute>} />
        <Route path="/live-classes" element={<ProtectedRoute><LiveClasses /></ProtectedRoute>} />
        <Route path="/plans" element={<ProtectedRoute><Plans /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
      </Route>
    </Routes>
    </>
  );
};

export default App;
