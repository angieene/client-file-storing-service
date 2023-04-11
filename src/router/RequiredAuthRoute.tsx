import React, { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import Layout from '../components/layout';
import { authService } from '../services/AuthService';
import { Routes } from '../utils/constants';

const RequiredAuthRoute: FC<PropsWithChildren> = ({ children }) => {
  if (authService.isLogin()) {
    return <Layout>{children}</Layout>;
  }
  return <Navigate to={Routes.Login} />;
};

export default RequiredAuthRoute;
