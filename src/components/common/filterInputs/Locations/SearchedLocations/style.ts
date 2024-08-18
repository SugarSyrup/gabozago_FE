import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  margin-top: 28px;
`;

export const ItemContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Name = styled.span`
  color: #000;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.2px;
`;

export const HighlightName = styled.span`
  color: ${({ theme }) => theme.main};
`;

export const Desc = styled.span`
  color: ${({ theme }) => theme.gray02};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.2px;
`;

export const LocationSelectButton = styled.div<{ isActive: boolean }>`
  padding: 4px 15px;

  border: none;
  border-radius: 20px;
  background-color: ${({ theme, isActive }) => (isActive ? theme.main : theme.gray06)};
  color: ${({ theme, isActive }) => (isActive ? theme.white : theme.black)};

  cursor: pointer;
`;
