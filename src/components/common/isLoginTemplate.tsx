import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

import LoginToast from './Toast/Toast/LoginToast';
import toastGenerate from '@_utils/toastGenerate';

interface Props {
  children: React.ReactNode;
}

function IsLoginTemplate({ children }: Props) {
  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');

    if (!accessToken) {
      toast.dismiss();
      toastGenerate(<LoginToast />);
    }
  }, []);

  return <>{children}</>;
}

export default IsLoginTemplate;
