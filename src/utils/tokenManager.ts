import axios from 'axios';
import { post } from './api';

const TokenManager = (() => {
  let isRefreshing = false;
  let refreshSubscribers = [];
  let tokenExpirationTime;

  const getIsRefreshing = () => {
    return isRefreshing;
  };

  const pushRefreshSubscriber = (item) => {
    refreshSubscribers.push(item);
  };

  const setTokenExpirationTime = (expiresIn) => {
    const expiresInDate = new Date(expiresIn);
    tokenExpirationTime = expiresInDate.getTime();
  };

  const isTokenExpired = () => {
    return Date.now() >= tokenExpirationTime;
  };

  const refreshToken = async () => {
    return post('user/jwt-token-auth/refresh');
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('access_expires_at');
    window.location.href = '/';
  };

  const refreshTokenAndRetry = async (error) => {
    try {
      if (!isRefreshing) {
        isRefreshing = true;
        const response = await refreshToken();
        const newToken = response.data.access;
        const { access_expires_at } = response.data;
        setTokenExpirationTime(access_expires_at);
        isRefreshing = false;
        localStorage.setItem('access_token', newToken);

        refreshSubscribers.forEach((cb) => cb(newToken));
        refreshSubscribers = [];
      }
      return await axios(error.config);
    } catch (refreshError) {
      logout();
      return Promise.reject(refreshError);
    }
  };

  return {
    getIsRefreshing,
    setTokenExpirationTime,
    refreshTokenAndRetry,
    logout,
    pushRefreshSubscriber,
    isTokenExpired,
  };
})();

export default TokenManager;
