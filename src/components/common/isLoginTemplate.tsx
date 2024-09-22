import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

import LoginToast from './Toast/Toast/LoginToast';

interface Props {
  children: React.ReactNode;
}

function IsLoginTemplate({ children }: Props) {
  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');

    if (!accessToken) {
      toast.dismiss();
      toast.custom(() => <LoginToast />, {
        duration: 1000,
      });
    }
  }, []);

  return <>{children}</>;
}

export default IsLoginTemplate;
