import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CircularProgress } from '@mui/material';

import Table from '../../components/table';
import { appState } from '../../context/secondClass';
import { folderService } from '../../services/FolderService';
import { IData } from '../../utils/types';

export interface IUser {
  id: string;
  created_at: string;
  updated_at: string;
  username: string;
  email: string;
  picture: string;
}

export interface IFolder {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  isPublic: boolean;
  user: IUser;
  childFolders: IData[];
  parentFolders: IFolder[];
  childFiles: IData[];
}

const Folder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [folder, setFolder] = useState<IFolder | null>(null);
  const { folderId } = useParams();

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Updated at',
        accessor: 'updated_at',
      },
      {
        Header: 'Size',
        accessor: 'size',
      },
    ],
    [],
  );

  useEffect(() => {
    setIsLoading(true);
    if (folderId) {
      folderService
        .getFolder(folderId)
        .then((res) => {
          setFolder(res);
          appState.parentFolders = res.parentFoldelders;
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  if (isLoading) return <CircularProgress />;

  return (
    <div>
      <Table
        columns={columns}
        data={folder ? [...folder.childFolders, ...folder.childFiles] : []}
      />
    </div>
  );
};

export default Folder;
