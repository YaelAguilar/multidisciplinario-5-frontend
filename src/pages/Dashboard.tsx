import React from 'react';
import { FaThermometerHalf, FaTint, FaLightbulb, FaCog, FaExclamationTriangle, FaCheck, FaSun } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full max-w-md p-8 space-y-8 bg-white shadow-2xl rounded-lg">
        <div className="absolute inset-0 w-full h-full transform translate-x-1 translate-y-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-lg -z-10"></div>
        <h2 className="text-3xl font-bold text-center text-gray-900">Hamster Cage Monitor</h2>
        <p className="text-center text-gray-600">Keep an eye on your furry friend's environment.</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow">
            <span className="text-2xl font-bold">72°F</span>
            <span className="text-sm text-gray-600">Temperature</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow">
            <span className="text-2xl font-bold">55%</span>
            <span className="text-sm text-gray-600">Humidity</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow">
            <span className="text-2xl font-bold">100%</span>
            <span className="text-sm text-gray-600">Light</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <button className="flex items-center justify-center w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100">
            <FaThermometerHalf className="mr-2" />
            Adjust Temperature
          </button>
          <button className="flex items-center justify-center w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100">
            <FaTint className="mr-2" />
            Adjust Humidity
          </button>
          <button className="flex items-center justify-center w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100">
            <FaLightbulb className="mr-2" />
            Adjust Light
          </button>
          <button className="flex items-center justify-center w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100">
            <FaCog className="mr-2" />
            Settings
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="flex items-center justify-center p-4 text-white bg-red-500 rounded-lg shadow">
            <FaExclamationTriangle className="mr-2" />
            Temperature High
          </div>
          <div className="flex items-center justify-center p-4 text-white bg-green-500 rounded-lg shadow">
            <FaCheck className="mr-2" />
            Humidity Normal
          </div>
          <div className="flex items-center justify-center p-4 text-white bg-yellow-500 rounded-lg shadow">
            <FaSun className="mr-2" />
            Light Bright
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
