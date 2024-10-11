import axios from 'axios';

const TokenManager = (() => {
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

  // 요청 인터셉터
  axios.interceptors.request.use(
    async (config) => {
      console.log('a');
      if (isTokenExpired()) {
        await refreshTokenAndRetry({ config });
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  // 응답 인터셉터
  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (
        error.response &&
        error.response.status === 401 &&
        // error.response.data.message === 'Token expired' &&
        error.response.data.messages[0].message === 'Token is invalid or expired' &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;
        const retryOriginalRequest = new Promise((resolve) => {
          refreshSubscribers.push((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(axios(originalRequest));
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
      }
      return Promise.reject(error);
    },
  );

  return {
    setTokenExpirationTime,
    refreshToken,
    logout,
  };
})();

export default TokenManager;
