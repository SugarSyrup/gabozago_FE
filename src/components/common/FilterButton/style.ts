import styled from 'styled-components'

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 11px;
  gap: 6px;
  box-sizing: border-box;

  word-break: keep-all;
  font-size: 11px;
  line-height: 18px;
  font-weight: 500;

  cursor: pointer;
  color: ${({ theme }) => theme.gray01};
  border: 0;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.gray02} inset;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.gray07};

  &.active {
    color: ${({ theme }) => theme.main};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.main} inset;
    background-color: ${({ theme }) => theme.blue05};

    svg path {
      stroke: ${({ theme }) => theme.main};
    }
  }

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.gray05};
  }
`
