// import { api } from './Api';
import { storageService } from './StorageService';

class AuthService {
  logout() {
    storageService.remove('access_token');
  }
  isLogin = (): boolean => !!storageService.get('access_token');
}

export const authService = new AuthService();
