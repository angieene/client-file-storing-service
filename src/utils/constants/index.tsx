import { CreateNewFolder, UploadFile } from '@mui/icons-material';

export const Routes = {
  Login: '/login',
  Dashboard: '/',
  Folder: '/folder/:folderId',
  Callback: '/auth/callback',
};

export const ACTIONS = [
  { icon: <CreateNewFolder />, name: 'New', operation: 'folder' },
  { icon: <UploadFile />, name: 'Upload', operation: 'files' },
];
