import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { get } from '@_utils/api';
import { LoginResponse } from '@_types/LoginResponse.type';
import toast from 'react-hot-toast';
import { Toast } from '@_common/Toast';

function RedirectPage() {
  const { type } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(document.location.toString()).searchParams.get('code');

    get<LoginResponse>(`/user/${type}/callback/?code=${code}`)
      .then((response) => {
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
      })
      .catch((error) => {
        if (error.status === 400) {
          toast.custom(() => (
            <Toast>
              다른 소셜 이메일로 가입되어 있습니다. {error.response.data.error}로 로그인 해주세요
            </Toast>
          ));
        } else {
          toast.custom(() => <Toast>로그인 실해팼습니다. 다시 로그인 시도해 주세요</Toast>);
        }
        navigate('/login');
      });
  }, []);

  return <></>;
}

export default RedirectPage;
