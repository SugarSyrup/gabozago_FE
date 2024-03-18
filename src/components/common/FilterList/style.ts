import styled from "styled-components";
import { FilterButton } from "../FilterButton/style";

export const FilterList = styled.ol`
  display: flex;
  gap: 10px;
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
`;

export const FilterItem = styled.li`
  scroll-snap-align: start;
  flex: 0 0 fit-content;
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

export const ActiveFilterList = styled(FilterList)`
  margin-top: 14px;
  flex-wrap: wrap;
`;

export const ActiveFilterChip = styled.button`
  display: flex;
  align-items: center;
  padding: 0 11px;

  cursor: pointer;
  font-size: 11px;
  line-height: 22px;
  border: 0;
  border-radius: 6px;
  color: ${({ theme }) => theme.gray01};
  background-color: ${({ theme }) => theme.gray06};

  svg {
    margin-left: 6px;
    width: 10px;
    height: 10px;
    path {
      fill: ${({ theme }) => theme.gray02};
      stroke: ${({ theme }) => theme.gray02};
    }
  }
`;
