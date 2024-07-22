import styled, { css } from 'styled-components';
import { DefaultButton } from './default.style';

export const Button = styled(DefaultButton)<{
  rounded: boolean;
  bgColor: 'blue' | 'gray';
}>`
  /* rounded */
  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 30px;
    `}

  /* bgColor */
  ${({ bgColor, theme }) =>
    bgColor === 'blue'
      ? css`
          background-color: ${theme.colors.blue.primary};
          color: ${theme.colors.white.primary};
        `
      : css`
          background-color: ${theme.colors.gray.tertiary};
          color: ${theme.colors.gray.secondary};
        `}
`;
