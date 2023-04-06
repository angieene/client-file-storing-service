import axios, { AxiosInstance } from 'axios';
import { Routes } from '../utils/constants';

const API_URL = process.env.REACT_APP_API_URL;

export const api: AxiosInstance = axios.create({
  baseURL: API_URL,

  withCredentials: true,
  headers: {
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// api.interceptors.request.use(
//   async (config): Promise<InternalAxiosRequestConfig> => {
//     if (config.headers) {
//       config.headers.Authorization = `Bearer access_token`;
//     }
//     return config;
//   }
// );

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      window.location.href = Routes.Login;
    }

    return Promise.reject(error);
  }
);
