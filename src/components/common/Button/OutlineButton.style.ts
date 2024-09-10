import styled from 'styled-components';

export const Button = styled.button<{ bgColor?: 'blue' | 'gray' }>`
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 16px;
  padding-right: 16px;

  /* @TODO FIX: GRAY 02 400 */
  border: 1px solid #888888;
  color: ${({ theme }) => theme.colors.blue.primary};
  border-radius: 100px;
  background-color: inherit;
  background-color: ${({ theme, bgColor }) => bgColor === 'blue' && theme.colors.blue.primary};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  span {
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    color: ${({ theme }) => `1px solid ${theme.colors.blue.primary}`};
  }
`;
