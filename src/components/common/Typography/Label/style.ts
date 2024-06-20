import styled, { css } from 'styled-components';

interface Props {
  size: 'sm' | 'md' | 'lg';
  noOfLine?: number;
  maxWidth?: number;
  color?: string;
}

export const Label = styled.label<Props>`
  ${({ theme, size, color }) => {
    const COLOR = color || theme.black;

    switch (size) {
      case 'lg':
        return css`
          color: ${COLOR};
          font-size: 12px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0.1px;
        `;
      case 'md':
        return css`
          color: ${COLOR};
          font-size: 11px;
          font-weight: 400;
          line-height: 16px;
          letter-spacing: 0.5px;
        `;
      case 'sm':
        return css`
          color: ${COLOR};
          font-size: 9px;
          font-weight: 400;
          line-height: 16px;
          letter-spacing: 0.5px;
        `;
    }
  }}

  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : '100%')};
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${({ noOfLine }) => noOfLine || 1};
  -webkit-box-orient: vertical;
`;
