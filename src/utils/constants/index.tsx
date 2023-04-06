import { CreateNewFolder, UploadFile } from '@mui/icons-material';

export const Routes = {
  Login: '/login',
  Dashboard: '/',
};

export const ACTIONS = [
  { icon: <CreateNewFolder />, name: 'New', operation: 'folder' },
  { icon: <UploadFile />, name: 'Upload', operation: 'files' },
];
