import { ReactNode } from 'react';

import Callback from '../components/callback';
import Dashboard from '../pages/dashboard';
import Folder from '../pages/folder';
import Login from '../pages/login';
import { Routes } from '../utils/constants';
import { RouteKeys } from '../utils/enums';

export interface RouterItem {
  title: string;
  key: RouteKeys;
  path: string;
  requiresAuth: boolean;
  component: ReactNode;
  headerInfo?: ReactNode;
}

export const ROUTES = [
  {
    title: 'Login',
    key: RouteKeys.Login,
    path: Routes.Login,
    requireAuth: false,
    component: <Login />,
  },
  {
    title: 'Dashbord',
    key: RouteKeys.Dashboard,
    path: Routes.Dashboard,
    requireAuth: true,
    component: <Dashboard />,
  },
  {
    title: 'Folder',
    key: RouteKeys.Folder,
    path: Routes.Folder,
    requireAuth: true,
    component: <Folder />,
  },
  {
    title: 'Callback',
    key: RouteKeys.Callback,
    path: Routes.Callback,
    requireAuth: false,
    component: <Callback />,
  },
];
