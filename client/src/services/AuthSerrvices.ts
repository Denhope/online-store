// import $api from '../http';
import { $authHost, $host } from '../http/index';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '../models/AuthResponse';
import jwt_decode from 'jwt-decode';
export default class AuthService {
  // static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
  //   return $host.post<AuthResponse>('api/user/login', { email, password });
  // }
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    const response = await $host.post<AuthResponse>('api/user/login', { email, password });
    localStorage.setItem('token', response.data.token);
    return response;
  }

  static async registration(email: string, password: string) {
    const response = await $host.post<AuthResponse>('api/user/registration', {
      email,
      password,
      role: 'ADMIN',
    });
    localStorage.setItem('token', response.data.token);
    return response;
  }

  static async logout(): Promise<void> {
    return $host.post('/');
  }

  static async check(): Promise<AxiosResponse<AuthResponse>> {
    const { data } = await $authHost.get<AuthResponse>('api/user/auth');
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
  }
}
