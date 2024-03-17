import styled from "styled-components";

export const FilterList = styled.ol`
  display: flex;
  gap: 10px;
  width: calc(100%);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
`;

export const FilterItem = styled.li`
  scroll-snap-align: start;
  flex: 0 0 fit-content;
`;

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

  color: ${({ theme }) => theme.gray01};
  border: 0;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.gray02} inset;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.gray07};

  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.gray05};
  }
`;
export const AllFilterButton = styled(FilterButton)`
  background-color: ${({ theme }) => theme.gray06};
  box-shadow: 0 0 0 0px ${({ theme }) => theme.gray02} inset;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.gray04};
  }

  &::after {
    display: none;
  }
`;
