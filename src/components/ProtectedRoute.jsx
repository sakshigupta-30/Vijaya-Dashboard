import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/UserContext';

export const ProtectedRoute= ({ children, requirePlan }) => {
  const { user, loading } = useAuth();
  if(loading) return <div>Loading...</div>;
  if(!user) return <Navigate to="/auth" replace />;
  if(requirePlan && user.plan!==requirePlan) return <Navigate to="/upgrade" replace />;
  return children;
};
