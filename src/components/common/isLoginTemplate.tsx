import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

import LoginToast from './Toast/Toast/LoginToast';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

function IsLoginTemplate({ children }: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');

    if (!accessToken) {
      toast.dismiss();
      toast.custom(() => <LoginToast />, {
        duration: 1000,
      });
      navigate('/');
    }
  }, []);

  return <>{children}</>;
}

export default IsLoginTemplate;
