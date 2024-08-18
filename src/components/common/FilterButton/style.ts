import styled from 'styled-components';

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  padding: 4px 15px;
  gap: 4px;
  box-sizing: border-box;

  word-break: keep-all;
  font-size: 11px;
  line-height: 18px;
  font-weight: 500;

  cursor: pointer;
  color: ${({ theme }) => theme.gray01};
  border: 0;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.gray02} inset;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.gray07};

  &.active {
    color: ${({ theme }) => theme.main};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.main} inset;

    svg path {
      stroke: ${({ theme }) => theme.main};
    }
  }

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.gray05};
  }

  label {
    word-break: break-all !important;
    text-align: left !important;
  }
`;
