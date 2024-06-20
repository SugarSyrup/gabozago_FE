import styled from 'styled-components';

export const Container = styled.button<{ isFollowing: boolean }>`
  padding: 7px 15px 7px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;

  font-size: 13px;

  color: ${({ theme, isFollowing }) => (isFollowing ? theme.main : 'white')};
  background-color: ${({ theme, isFollowing }) => (isFollowing ? 'white' : theme.main)};
  border: ${({ theme }) => `1px solid ${theme.main}`};
  border-radius: 6px;

  svg {
    width: 12px;
    height: 12px;

    path {
      fill: ${({ theme, isFollowing }) => (isFollowing ? theme.main : 'white')};
    }
  }
`;
