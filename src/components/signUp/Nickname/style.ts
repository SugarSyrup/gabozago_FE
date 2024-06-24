import styled, { css } from 'styled-components';

export const InputExplain = styled.span`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;

  img {
    width: 16px;
    height: 16px;

    border-radius: 100%;
  }

  color: ${({ theme }) => theme.gray02};
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.2px;
`;

export const AlertMessage = styled.span<{ color: 'red' | 'blue' }>`
  color: ${({ color, theme }) => (color === 'blue' ? theme.main : theme.red)};
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.2px;
`;
