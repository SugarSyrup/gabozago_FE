import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100%);
  max-width: 420px;
  //min-width:

  height: 48px;
  padding: 4px 8px 4px 16px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray.primary};
`;
