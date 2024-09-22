import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Typography from '../../Typography';
import Toast from '.';

export default function LoginToast() {
  const navigate = useNavigate();
  return (
    <Toast>
      <Typography.Body size="lg" color="white">
        로그인이 필요한 서비스 입니다
      </Typography.Body>
      <ToastLink
        onClick={() => {
          navigate(`/login`);
        }}
      >
        로그인 하러가기
      </ToastLink>
    </Toast>
  );
}

const ToastLink = styled.span`
  display: inline-block;
  padding-top: 6px;
  padding-bottom: 6px;
  color: white;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-decoration-line: underline;
  cursor: pointer;
`;
