import styled from 'styled-components';

export const NavContainer = styled.div`
  width: 100%;
  max-width: 500px;

  padding: 15px 30px;

  border-top: 1px solid ${({ theme }) => theme.colors.gray.tertiary};
`;
