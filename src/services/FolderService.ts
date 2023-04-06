import { api } from './Api';

class FoldersService {
  async createFolder(): Promise<any> {
    const response = await api.post('');
    return response.data;
  }
  async getAll(): Promise<any> {
    const response = await api.get('folders/search', {});
    console.log(response);

    return response.data;
  }
  async getFolders(): Promise<any> {
    const response = await api.post('');
    return response.data;
  }
  async getFolder(): Promise<any> {
    const response = await api.post('');
    return response.data;
  }
  async deleteFolder(): Promise<any> {
    const response = await api.post('');
    return response.data;
  }
  async renameFolder(): Promise<any> {
    const response = await api.post('');
    return response.data;
  }
}

export const folderService = new FoldersService();
