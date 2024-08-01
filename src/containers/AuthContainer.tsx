import React from 'react';
import { useAuth } from '../context/useAuth';
import { Navigate } from 'react-router-dom';

const AuthContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default AuthContainer;
