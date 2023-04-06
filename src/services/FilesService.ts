import { api } from './Api';

class FilesService {
  async filesUpload(): Promise<any> {
    const response = await api.post('');
    return response.data;
  }
  async getFiles(): Promise<any> {
    const response = await api.get('');
    return response.data;
  }
  async renameFile(): Promise<any> {
    const response = await api.patch('');
    return response.data;
  }
  async getFile(): Promise<any> {
    const response = await api.get('');
    return response.data;
  }
  async deleteFile(): Promise<any> {
    const response = await api.delete('');
    return response.data;
  }
}

export const authService = new FilesService();
