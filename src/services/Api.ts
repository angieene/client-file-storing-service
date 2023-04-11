import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

import { Routes } from '../utils/constants';
import { authService } from './AuthService';
import { storageService } from './StorageService';

const API_URL = process.env.REACT_APP_API_URL;

export const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // Authorization:
    //   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMDQ2MTM3ODk0MjI4Mjc2MjY0ODEiLCJlbWFpbCI6ImFuZ2VsYS5uZXJ1a2hAZ21haWwuY29tIiwiaWF0IjoxNjgxMDQ2MjQ0LCJleHAiOjE2ODExMzI2NDR9.vm2IP6gQwc6AEFXdsqEJ3YP91L7YX39rPRqJ0S40juQ',
  },
});

api.interceptors.request.use(
  async (config): Promise<InternalAxiosRequestConfig> => {
    if (config.headers) {
      config.headers.Authorization = `Bearer ${storageService.get(
        'access_token',
      )}`;
    }
    return config;
  },
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      window.location.href = Routes.Login;
      authService.logout();
    }

    return Promise.reject(error);
  },
);
