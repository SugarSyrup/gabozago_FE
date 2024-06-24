import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  margin-top: 56px;

  svg {
    width: 60px;
    height: 60px;
  }
`;

export const MainText = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;

export const Desc = styled.span`
  color: ${({ theme }) => theme.gray01};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;
