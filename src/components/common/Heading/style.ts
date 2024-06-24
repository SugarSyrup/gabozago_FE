import styled from 'styled-components';

interface Props {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  noOfLine?: number;
  maxWidth?: number;
}

export const Heading = styled.h1<Props>`
  font-size: ${({ size }) => size == 'xs' && '12px'};
  font-size: ${({ size }) => size == 'sm' && '16px'};
  font-size: ${({ size }) => size == 'md' && '20px'};
  font-size: ${({ size }) => size == 'lg' && '24px'};
  font-size: ${({ size }) => size == 'xl' && '28px'};

  font-style: normal;
  font-weight: 700;
  font-weight: ${({ size }) => size == 'xs' && '600'};
  font-weight: ${({ size }) => size == 'sm' && '600'};

  letter-spacing: 0.2px;

  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : '100%')};
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${({ noOfLine }) => noOfLine || 1};
  -webkit-box-orient: vertical;
`;
