import styled from "styled-components";
import { FilterButton } from "../FilterButton/style";

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
