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
  margin: 5px 0 10px;
  padding: 6px 0;
  display: flex;
  gap: 7px;
`;
export const CategoryItem = styled.li``;
export const CategoryButton = styled.button<{ active: boolean }>`
  padding: 0 5px;
  border: 0;
  border-radius: 5px;

  font-size: 14px;
  line-height: 22px;
  color: ${({ theme, active }) => (active ? theme.main : theme.gray01)};
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
