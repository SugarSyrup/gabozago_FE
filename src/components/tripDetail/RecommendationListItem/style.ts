import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LeftItems = styled.div`
  display: flex;
  gap: 12px;
`;

export const Thumbnail = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;

  background-color: ${({ theme }) => theme.gray04};
`;

export const Infomation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ExtraInfomation = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`;

export const HighlightName = styled.span`
  color: ${({ theme }) => theme.main};
`;

export const Button = styled.button<{ isActive: boolean }>`
  background-color: ${({ isActive, theme }) => isActive && theme.main};
  color: ${({ theme, isActive }) => isActive && theme.white};

  padding: 4px 15px;
  border: none;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  flex-shrink: 0;
`;
