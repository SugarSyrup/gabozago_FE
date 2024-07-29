import styled, { css } from 'styled-components';

export const Button = styled.button<{
  bgColor: 'blue' | 'gray';
}>`
  width: 100%;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;

  border: none;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  /* bgColor */
  ${({ bgColor, theme }) =>
    bgColor === 'blue'
      ? css`
          background-color: ${theme.colors.blue.secondary};
          color: ${theme.colors.blue.primary};
        `
      : css`
          background-color: ${theme.colors.gray.tertiary};
          color: ${theme.colors.font.tertiary};
        `}

  span {
    font-size: 16px;
    ${({ bgColor }) =>
      bgColor === 'blue'
        ? css`
            font-weight: 600;
          `
        : css`
            font-weight: 400;
          `}
    line-height: 28px;
  }
`;
