import styled, { css } from 'styled-components';

const defaultButton = css`
  padding: 22px;
  gap: 11px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  svg {
    width: 24px;
  }
`;
const smallButton = css`
  padding: 7px;
  gap: 6px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  svg {
    width: 14px;
  }
`;

export const AddButton = styled.button<{ size: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  cursor: pointer;
  border: 0;
  font-weight: 600;
  line-height: 22px;
  color: ${({ theme }) => theme.gray02};
  background-color: ${({ theme }) => theme.gray06};

  &:hover {
    background-color: ${({ theme }) => theme.gray05};
  }
  &:active {
    background-color: ${({ theme }) => theme.gray04};
  }
  ${({ size }) => (size === 'small' ? smallButton : defaultButton)}
`;
