import styled, { css } from 'styled-components';

interface Props {
  size: 'sm' | 'md' | 'lg';
  noOfLine?: number;
  maxWidth?: number;
  color?: string;
}

export const Title = styled.h3<Props>`
  ${({ theme, size, color }) => {
    const COLOR = color || theme.black;

    switch (size) {
      case 'lg':
        return css`
          color: ${COLOR};
          font-size: 16px;
          font-weight: 600;
          line-height: 28px;
        `;
      case 'md':
        return css`
          color: ${COLOR};
          font-size: 14px;
          font-weight: 600;
          line-height: 24px;
          letter-spacing: 0.15px;
        `;
      case 'sm':
        return css`
          color: ${COLOR};
          font-size: 12px;
          font-weight: 600;
          line-height: 20px;
          letter-spacing: 0.1px;
        `;
    }
  }}

  word-break: keep-all;
  overflow-wrap: anywhere;
  word-break: keep-all;
  overflow-wrap: anywhere;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : '100%')};
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${({ noOfLine }) => noOfLine || 1};
  -webkit-box-orient: vertical;
`;
