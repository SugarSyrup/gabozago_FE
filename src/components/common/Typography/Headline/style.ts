import styled, { css } from 'styled-components';

interface Props {
  size: 'sm' | 'md' | 'lg';
  noOfLine?: number;
  maxWidth?: number;
  color?: string;
}

export const Headline = styled.h1<Props>`
  ${({ theme, size, color }) => {
    const COLOR = color || theme.black;

    switch (size) {
      case 'lg':
        return css`
          color: ${COLOR};
          font-size: 24px;
          font-weight: 600;
          line-height: 40px;
        `;
      case 'md':
        return css`
          color: ${COLOR};
          font-size: 22px;
          font-weight: 600;
          line-height: 36px;
        `;
      case 'sm':
        return css`
          color: ${COLOR};
          font-size: 20px;
          font-weight: 600;
          line-height: 32px;
        `;
    }
  }}

  word-break: keep-all;
  overflow-wrap: anywhere;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : '100%')};
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${({ noOfLine }) => noOfLine || 1};
  -webkit-box-orient: vertical;
`;
