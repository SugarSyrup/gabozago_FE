function isLogin() {
  const access = localStorage.getItem('access_token');

  if (access === 'null' || access === null || !access) {
    return false;
  }

  return true;
}

export default isLogin;
