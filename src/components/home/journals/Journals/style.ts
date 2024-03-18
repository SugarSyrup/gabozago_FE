import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: fit-content(100%) auto;
`;

export const FixedControlBox = styled.div`
  width: 100%;
  position: sticky;
  height: fit-content;

  z-index: 20;
  background-color: ${({ theme }) => theme.white};
`;

export const CategoryList = styled.ol`
  padding: 6px 0;
  display: flex;
  gap: 7px;
`;
export const CategoryItem = styled.li``;
export const CategoryButton = styled.button<{ active: boolean }>`
  border: 0;
  padding: 0 5px;
  border-radius: 5px;
  line-height: 22px;
  font-size: 14px;
  color: ${({ theme, active }) => (active ? theme.main : theme.black)};
  background-color: transparent;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ContentBox = styled.div`
  height: 100%;
  overflow-y: auto;
`;
