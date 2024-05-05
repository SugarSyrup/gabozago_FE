import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
})

const onRequest = (
    config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
    const { method, url } = config;
    console.log(`[API - REQUEST] ${method?.toUpperCase()} ${url}`);

    const token = localStorage.getItem("access_token");
    if(token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}

const onResponse = (res: AxiosResponse): AxiosResponse => {
    const { method, url } = res.config;
    console.log(`[API - RESPONSE] ${method?.toUpperCase()} ${url}`);

    return res;
}

const onError = (error: AxiosError | Error): Promise<AxiosError> => {
    if (axios.isAxiosError(error)) {
      const { method, url } = error.config as InternalAxiosRequestConfig;
      if (error.response) {
        const { statusCode, message } = error.response.data;
        console.log(
          `[API - ERROR] ${method?.toUpperCase()} ${url} | ${statusCode} : ${message}`,
        );
      }
    } else {
      console.log(`[API] | Error ${error.message}`);
    }
    return Promise.reject(error);
};

axiosInstance.interceptors.request.use(onRequest);
axiosInstance.interceptors.response.use(
    onResponse,
    onError,
);

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