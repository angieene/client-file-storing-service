import { api } from './Api';

class PermitionService {
  async getFolderPermitions(): Promise<any> {
    const response = await api.get('');
    return response.data;
  }
  async getFilePermitions(): Promise<any> {
    const response = await api.get('');
    return response.data;
  }
  async getFolder(): Promise<any> {
    const response = await api.get('');
    return response.data;
  }
  async UpdatePermition(): Promise<any> {
    const response = await api.patch('');
    return response.data;
  }
  async renameFolder(): Promise<any> {
    const response = await api.patch('');
    return response.data;
  }
}

export const permitionService = new PermitionService();
