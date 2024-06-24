import styled, { css } from 'styled-components';

export const List = styled.ol`
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px 8px;
`;

export const Button = styled.li<{ active: boolean }>`
  padding: 10px;
  flex: 0 1 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  cursor: pointer;
  border-radius: 6px;
  word-break: keep-all;
  font-size: 13px;
  line-height: 22px;
  font-weight: 400;

  ${({ active }) =>
    active
      ? css`
          color: ${({ theme }) => theme.white};
          background-color: ${({ theme }) => theme.main};
        `
      : css`
          color: ${({ theme }) => theme.gray01};
          background-color: ${({ theme }) => theme.blue05};
          &:hover {
            background-color: ${({ theme }) => theme.blue04};
          }
        `}
`;
