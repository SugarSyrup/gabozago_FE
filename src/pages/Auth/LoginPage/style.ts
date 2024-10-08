import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100dvh - 60px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const BrandCopy = styled.span`
  margin-top: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.main};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`;

export const OAuthSquareButton = styled.div<{ bgColor: string; color: string }>`
  width: 100%;
  padding: 3px 0px;
  border-radius: 4px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};

  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  svg {
    width: 40px;
    height: 40px;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
  }
`;

export const SeperateTextLine = styled.div`
  width: 100%;
  color: #d4d4d4;
  font-size: 13px;
  font-weight: 400;
  line-height: 24px;

  display: flex;
  gap: 17px;
  align-items: center;
  word-break: keep-all;

  margin-top: 12px;

  &::before,
  &::after {
    content: '';
    width: 100%;
    border-bottom: 1px solid #d4d4d4;
  }
`;

export const OAuthButtons = styled.div`
  width: 100%;
  margin-top: 22px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const OAuthCircleButton = styled.div<{ color: string }>`
  width: 40px;
  height: 40px;
  background-color: ${({ color }) => color};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100%;
  cursor: pointer;
`;

export const MessageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 110px;

  display: flex;
  justify-content: center;
  gap: 11px;
`;

const upDown = keyframes`
  from{
    transform: translateY(2px);
  }
  to{
    transform: translateY(-2px);
  }
`;

export const FloatingMessage = styled.div`
  padding: 4px 25px;
  background-color: white;
  border-radius: 6px;
  filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.15));

  position: absolute;
  top: -46px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  animation: ${upDown} 1s infinite ease-in-out alternate;

  &::after {
    content: '';
    width: 0;
    height: 0;
    border-top: 9px solid white;
    border-left: 9px solid transparent;
    border-bottom: 9px solid transparent;
    border-right: 9px solid transparent;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));

    position: absolute;
    z-index: 20;
    bottom: -18px;
  }

  span {
    color: #000;
    font-size: 11px;
    font-weight: 600;
    line-height: 22px;
  }
`;
