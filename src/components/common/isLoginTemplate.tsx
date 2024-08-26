import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Toast } from './Toast';
import Typography from './Typography';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const ToastLink = styled.span`
  color: white;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-decoration-line: underline;
  cursor: pointer;
`;

function IsLoginTemplate({ children }: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');

    if (!access_token) {
      toast.custom(
        () => (
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
        ),
        {
          duration: 1000,
        },
      );
      navigate('/');
    }
  }, []);

  return <>{children}</>;
}

export default IsLoginTemplate;
