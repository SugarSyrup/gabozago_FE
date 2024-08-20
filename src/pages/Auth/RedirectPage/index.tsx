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
      if (response.data.status === 'ACTIVE') {
        localStorage.setItem('access_token', response.data.access);

        if (window.GabozagoDev) {
          window.GabozagoDev.postUUID({
            code: response.data.user_data.uuid,
          });
        }
        if (window.webkit) {
          window.webkit.messageHandlers.GabozagoDev.callback.message({
            action: 'postUUID',
            code: response.data.user_data.uuid,
          });
        }

        navigate('/');
      } else {
        navigate(
          `/signup?type=${type}&email=${response.data.user_data?.email}&nickname=${response.data.user_data?.nickname}&code=${response.data.access}`,
        );
      }
    });
  }, []);

  return <></>;
}

export default RedirectPage;
