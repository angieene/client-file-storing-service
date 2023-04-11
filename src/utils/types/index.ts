export interface IFolderBody {
  name: string;
  parentFolder?: string;
  isPublic?: boolean;
}

export interface IData {
  id: string;
  name: string;
  updated_at: string;
  size: number;
  childFolders: IData[];
  parentFolders: IData[];
}
