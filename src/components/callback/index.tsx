import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { storageService } from '../../services/StorageService';
import { Routes } from '../../utils/constants';

const Callback = () => {
  let navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = new URLSearchParams(location.search).get('token');
    token && storageService.set('access_token', token);
    navigate(Routes.Dashboard);
  }, [location.search, navigate]);

  return <div>Logging in...</div>;
};

export default Callback;
