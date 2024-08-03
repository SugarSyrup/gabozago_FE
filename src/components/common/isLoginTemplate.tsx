import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

function IsLoginTemplate({ children }: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');

    if (!access_token) {
      navigate('/');
    }
  }, []);

  return <>{children}</>;
}

export default IsLoginTemplate;
