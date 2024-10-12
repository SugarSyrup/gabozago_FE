/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import TokenManager from './tokenManager';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
});

axiosInstance.defaults.withCredentials = true;

const onRequest = async (
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> => {
  const { method, url } = config;
  console.log(`[API - REQUEST] ${method?.toUpperCase()} ${url}`);

  // @TODO: expired 되면 요청 안보내기
  // if (TokenManager.isTokenExpired()) {
  //   await TokenManager.refreshTokenAndRetry({ config });
  // }

  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  config.withCredentials = true;
  return config;
};

const onResponse = (res: AxiosResponse): AxiosResponse => {
  const { method, url } = res.config;
  console.log(`[API - RESPONSE] ${method?.toUpperCase()} ${url}`);

  return res;
};

const onError = async (error: AxiosError | Error): Promise<AxiosError> => {
  if (axios.isAxiosError(error)) {
    const originalRequest = error.config;

    const { method, url } = error.config as InternalAxiosRequestConfig;
    if (error.response) {
      const {
        status,
        data: { code, messages },
      } = error.response;
      console.log(`[API - ERROR] ${method?.toUpperCase()} ${url} | ${status} : ${code}`);

      if (status === 401 && messages[0].message === 'Token is invalid or expired') {
        originalRequest._retry = true;
        const retryOriginalRequest = new Promise((resolve) => {
          TokenManager.pushRefreshSubscriber((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(axios(originalRequest));
          });
        });
        if (!TokenManager.getIsRefreshing()) {
          try {
            await TokenManager.refreshTokenAndRetry(error);
          } catch (refreshError) {
            return Promise.reject(refreshError);
          }
        }

        return retryOriginalRequest;
        // return axiosInstance.request(error.config as InternalAxiosRequestConfig);
      }
      if (status === 401) {
        TokenManager.logout();
      }
    }
  }
  console.log(`[API] | Error ${error.message}`);

  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(onRequest);
axiosInstance.interceptors.response.use(onResponse, onError);

export const get = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  const response = await axiosInstance.get(url, config);
  return response;
};

export const post = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  const response = await axiosInstance.post(url, data, config);
  return response;
};

export const deletes = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  const response = await axiosInstance.delete(url, {
    data,
    ...config,
  });
  return response;
};

export const patch = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  const response = await axiosInstance.patch(url, data, config);
  return response;
};
