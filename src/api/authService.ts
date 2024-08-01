import apiClient from './axiosConfig';

export const login = async (email: string, password: string) => {
  const response = await apiClient.post('/auth/login', { email, password });
  return response.data;
};

export const register = async (name: string, email: string, password: string) => {
  const response = await apiClient.post('/auth/register', { name, email, password });
  return response.data;
};
