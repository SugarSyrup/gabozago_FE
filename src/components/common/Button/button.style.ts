import styled from 'styled-components';

export const LongButton = styled.button<{
  bgColor: string;
}>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue.main};

  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 20px;

  border: none;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  color: white;
  background-color: ${({ bgColor, theme }) => bgColor === 'blue' && theme.colors.blue.primary};
`;
