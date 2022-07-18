import axios from 'axios';
import { AuthResponse } from '../models/AuthResponse';
export const API_URL = `http://localhost:5000/`;

const $host = axios.create({
  baseURL: API_URL,
});

const $authHost = axios.create({
  baseURL: API_URL,
});

const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
