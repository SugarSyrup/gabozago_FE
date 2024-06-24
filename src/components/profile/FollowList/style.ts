import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 16px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Header = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const FollowCounts = styled.span`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.2px;

  display: flex;
  align-items: center;
  gap: 2px;

  span {
    color: ${({ theme }) => theme.gray01};
  }
`;

export const List = styled.ol`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2px;
`;
