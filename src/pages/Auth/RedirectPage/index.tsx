import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { get } from '@_utils/api';
import { LoginResponse } from '@_types/LoginResponse.type';

function RedirectPage() {
  const { type } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(document.location.toString()).searchParams.get('code');

    get<LoginResponse>(`/user/${type}/callback/?code=${code}`).then((response) => {
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      if (response.data.status === 'ACTIVE') {
        // navigate('/');
        console.log('/');
      } else {
        console.log(
          `/signup?type=${type}&email=${response.data.user_data?.email}&nickname=${response.data.user_data?.nickname}`,
        );
        // navigate(
        //   `/signup?type=${type}&email=${response.data.user_data?.email}&nickname=${response.data.user_data?.nickname}`,
        // );
      }
    });
  }, []);

  return <></>;
}

export default RedirectPage;
