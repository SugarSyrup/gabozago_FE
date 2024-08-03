import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import PageTemplate from '../../components/common/PageTemplate';

import * as S from './style';
import useAlert from '../../hooks/useAlert';
import Typography from '../../components/common/Typography';
import { loginAlertState } from '../../recoil/loginAlertState';
import Recommendation from '../../components/home/Recommendation';

function HomePage() {
  const navigate = useNavigate();
  const [isLoginAlertState, setIsLoginAlertState] = useRecoilState(loginAlertState);
  const { Alert, alertOpen } = useAlert({
    Content: (
      <Typography.Body size="lg" color="white">
        로그인이 필요한 서비스에요.
      </Typography.Body>
    ),
    RightContent: (
      <Typography.Body size="lg" color="white">
        <span
          style={{ textDecoration: 'underline', cursor: 'pointer' }}
          onClick={() => {
            navigate('/login');
          }}
        >
          로그인 하러가기
        </span>
      </Typography.Body>
    ),
  });

  useEffect(() => {
    if (isLoginAlertState) {
      alertOpen();
      setIsLoginAlertState(false);
    }
  }, []);

  return (
    <PageTemplate>
      <Alert />
      <Recommendation />
    </PageTemplate>
  );
}

export default HomePage;
