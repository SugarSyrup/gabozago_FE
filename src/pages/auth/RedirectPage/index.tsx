import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { post } from '@_utils/api';

function RedirectPage() {
  const { type } = useParams();

  useEffect(() => {
    const code = new URL(document.location.toString()).searchParams.get('code');
    switch (type) {
      case 'kakao':
        post('', {
          code,
        }).then((response) => {
          // response 값에 따라 로그인 핸들링 하기
        });
        break;

      case 'naver':
        break;

      case 'google':
        break;

      default:
        break;
    }
  }, []);

  return <div>asdf</div>;
}

export default RedirectPage;
