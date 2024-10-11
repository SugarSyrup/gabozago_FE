/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

let isRefreshing = false;
let refreshSubscribers = [];
let tokenExpirationTime;

const setTokenExpirationTime = (expiresIn) => {
  tokenExpirationTime = Date.now() + expiresIn * 1000;
};

const isTokenExpired = () => {
  return Date.now() >= tokenExpirationTime;
};

const refreshToken = async () => {
  // 실제 토큰 갱신 로직을 여기에 구현
  // 예: return await axios.post('/api/refresh-token');
  return axios.post('/user/jwt-token-auth/refresh');
};

const logout = () => {
  // 로그아웃 로직 구현
  // 예: 토큰 삭제, 상태 초기화 등
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  window.location.href = '/login';
};

const refreshTokenAndRetry = async (error) => {
  try {
    if (!isRefreshing) {
      isRefreshing = true;
      const response = await refreshToken();
      const newToken = response.data.accessToken;
      const { expiresIn } = response.data;
      setTokenExpirationTime(expiresIn);
      isRefreshing = false;
      refreshSubscribers.forEach((cb) => cb(newToken));
      refreshSubscribers = [];
    }
    return await axios(error.config);
  } catch (refreshError) {
    logout();
    return Promise.reject(refreshError);
  }
};

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
});

axiosInstance.defaults.withCredentials = true;

const onRequest = async (
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> => {
  const { method, url } = config;
  console.log(`[API - REQUEST] ${method?.toUpperCase()} ${url}`);

  if (isTokenExpired()) {
    await refreshTokenAndRetry({ config });
  }

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

      console.log(`[API - ERROR] ${method?.toUpperCase()} ${url} | ${status} : ${code}`);

      if (status === 401 && code === 'user_inactive') {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/login';
      }

      if (
        status === 401 &&
        messages[0].message === 'Token is invalid or expired' &&
        !error.config._retry
      ) {
        error.config._retry = true;
        const retryOriginalRequest = new Promise((resolve) => {
          refreshSubscribers.push((token) => {
            error.config.headers.Authorization = `Bearer ${token}`;
            localStorage.setItem('access_token', token);

            resolve(axios(error.config));
          });
        });

        if (!isRefreshing) {
          try {
            await refreshTokenAndRetry(error);
          } catch (refreshError) {
            return Promise.reject(refreshError);
          }
        }

        return retryOriginalRequest;
        // await axiosInstance
        //   .post<{
        //     access: string;
        //     access_expires_at: string;
        //   }>('/user/jwt-token-auth/refresh')
        //   .then((response) => {
        //     localStorage.setItem('access_token', response.data.access);
        //     // return axiosInstance.request(error.config as InternalAxiosRequestConfig);
        //     window.location.reload();
        //   })
        //   .catch(() => {
        //     localStorage.removeItem('access_token');
        //     localStorage.removeItem('refresh_token');
        //     window.location.href = '/login';
        //   });

        // return axiosInstance.request(error.config as InternalAxiosRequestConfig);
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
