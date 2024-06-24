import styled from 'styled-components';

export const Button = styled.button`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: ${({ theme }) => theme.gray01};
  border: 0;
  background-color: transparent;

  &:hover {
    text-decoration: underline;
  }
`;
