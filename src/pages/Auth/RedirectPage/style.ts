import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100dvh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  img {
    width: 170px;
  }
`;

export const Text = styled.span`
  color: #121212;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
`;

export const TextLink = styled(Link)`
  margin-top: -24px;
  color: #a6a6a6;
  text-align: center;

  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-decoration-line: underline;
  cursor: pointer;
`;
