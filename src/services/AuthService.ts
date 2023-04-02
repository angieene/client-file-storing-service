import { api } from './Api';

class AuthService {
  async authorization(): Promise<any> {
    const response = await api.get('auth');
    // return response.data;
  }
  // async login(userData: ILogin): Promise<any> {
  // 	const response = await api.post('/auth/login', userData);
  // 	return response.data;
  // }
}

export const authService = new AuthService();
