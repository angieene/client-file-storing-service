import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';

// import Pages from '@/constants/pages';
// import store from '@/store';

// import { authService } from './AuthService';

const API_URL = process.env.REACT_APP_API_URL;

export const api: AxiosInstance = axios.create({
  baseURL: API_URL,

  headers: {
    mode: 'cors',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    accept: 'application/json',
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

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error?.response?.status === 401) {
//       // window.location.href = Pages.AUTORIZATION;
//       // authService.logout(dispatch);
//     }

//     return Promise.reject(error);
//   }
// );
