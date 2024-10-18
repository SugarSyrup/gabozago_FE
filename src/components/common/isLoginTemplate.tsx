import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

import LoginToast from './Toast/Toast/LoginToast';
import toastGenerate from '@_utils/toastGenerate';
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
      toastGenerate(<LoginToast />);
      navigate('/');
    }
  }, []);

  return <>{children}</>;
}

export default IsLoginTemplate;
