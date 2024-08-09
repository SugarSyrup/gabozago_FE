import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { post } from '@_utils/api';

function RedirectPage() {
  const { type } = useParams();

  useEffect(() => {
    switch (type) {
      case 'kakao':
        const code = new URL(dococument.location.toString()).searchParams.get('code');
        post('', {
          code,
        }).then((response) => {
          // response 값에 따라 로그인 핸들링 하기
        });
        break;

      default:
        break;
    }
  }, []);

  return <div>asdf</div>;
}

export default RedirectPage;
