import styled from "styled-components";
import chevronBottomIcon from "../../assets/icons/chevron_bottom.svg";

export const FilterList = styled.ol`
  display: flex;
  gap: 10px;
  width: calc(100% + 20px);
  overflow-x: auto;
`;

export const FilterItem = styled.li`
  flex: 0 0 fit-content;
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 11px;
  gap: 6px;

  word-break: keep-all;
  font-size: 11px;
  line-height: 19.4px;
  font-weight: 500;

  color: ${({ theme }) => theme.gray01};
  border: 0;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.gray05};

  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.gray04};
  }

  &::after {
    content: "";
    display: block;
    width: 7.5px;
    height: 4px;
    background-image: url(${chevronBottomIcon});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
export const AllFilterButton = styled(FilterButton)`
  background-color: ${({ theme }) => theme.gray04};

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.gray03};
  }

  &::after {
    display: none;
  }
`;
export const NoFilterButton = styled(FilterButton)`
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.main};

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.blue01};
  }

  &::after {
    display: none;
  }
`;
