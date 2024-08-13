import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { get } from '@_utils/api';

interface LoginResponse {
  status: 'ACTIVE' | 'INACTIVE';
  access: string;
  refresh: string;
  access_expires_at: string;
  refresh_expires_at: string;
  user_data?: {
    email: string;
    nickname: string;
  };
}

function RedirectPage() {
  const { type } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(document.location.toString()).searchParams.get('code');

    get<LoginResponse>(`/user/${type}/callback/?code=${code}`).then((response) => {
      console.log(response);

      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      if (response.data.status === 'ACTIVE') {
        navigate('/');
      } else {
        // navigate(`/signup?type=naver&email=${formdata.get('email')}&nickname=`);
      }
    });
  }, []);

  return <div>asdf</div>;
}

export default RedirectPage;
