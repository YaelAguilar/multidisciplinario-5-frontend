import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../context/useAuth';

const Header: React.FC = () => {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/login');
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Hamster Cage Monitor</h1>
        <button onClick={handleLogoutClick} className="bg-red-500 px-4 py-2 rounded">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
