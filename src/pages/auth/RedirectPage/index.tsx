import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { get, post } from '@_utils/api';

function RedirectPage() {
  const { type } = useParams();

  useEffect(() => {
    const code = new URL(document.location.toString()).searchParams.get('code');
    console.log(code);
    switch (type) {
      case 'kakao':
        get(`/user/kakao/callback/?code=${code}`).then((response) => {
          console.log(response);
        });
        break;

      case 'naver':
        get(`/user/naver/callback/?code=${code}`).then((response) => {
          console.log(response);
        });
        break;

      case 'google':
        get(`/user/google/callback/?code=${code}`).then((response) => {
          console.log(response);
        });
        break;

      default:
        break;
    }
  }, []);

  return <div>asdf</div>;
}

export default RedirectPage;
