import { IFolderBody } from '../utils/types';
import { api } from './Api';

class FoldersService {
  async createFolder(folderBody: IFolderBody): Promise<any> {
    const response = await api.post('folders/create', folderBody);
    return response.data;
  }
  async getAll(): Promise<any> {
    const response = await api.get('folders/search');
    return response.data;
  }
  async getRootFolder(): Promise<any> {
    const response = await api.get('folders/root');
    return response.data;
  }
  async getFolder(folderId: string): Promise<any> {
    const response = await api.get(`folders/get-one/${folderId}`);
    return response.data;
  }
  async deleteFolder(): Promise<any> {
    const response = await api.delete('');
    return response.data;
  }
  async renameFolder(): Promise<any> {
    const response = await api.patch('');
    return response.data;
  }
}

export const folderService = new FoldersService();
