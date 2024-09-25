/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
});

axiosInstance.defaults.withCredentials = true;

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const { method, url } = config;
  console.log(`[API - REQUEST] ${method?.toUpperCase()} ${url}`);

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
    const { method, url } = error.config as InternalAxiosRequestConfig;
    if (error.response) {
      const {
        status,
        data: { code, messages },
      } = error.response;
      console.log(error.response.data);
      console.log(`[API - ERROR] ${method?.toUpperCase()} ${url} | ${status} : ${code}`);
      if (status === 401 && code === 'user_inactive') {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/login';
      }

      if (status === 401 && messages[0].message === 'Token is invalid or expired') {
        await axiosInstance
          .post<{
            access: string;
            access_expires_at: string;
          }>('/user/jwt-token-auth/refresh')
          .then((response) => {
            localStorage.setItem('access_token', response.data.access);
            return axiosInstance.request(error.config as InternalAxiosRequestConfig);
          })
          .catch(() => {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            window.location.href = '/login';
          });

        return axiosInstance.request(error.config as InternalAxiosRequestConfig);
      }
    }
  } else {
    console.log(`[API] | Error ${error.message}`);
  }
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
