import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const TabList = styled.ol`
  display: flex;
  justify-content: space-around;
`;

export const TabItem = styled.li<{ focused: boolean }>`
  padding: 10px;
  flex-grow: 1;

  cursor: pointer;
  text-align: center;
  font-size: 14px;
  line-height: 22px;
  font-weight: ${({ focused }) => (focused === true ? "600" : "500")};
  color: ${({ theme, focused }) =>
    focused === true ? theme.main : theme.gray01};
  border-bottom: 2px solid ${({ theme }) => theme.gray04};

  transition: all 0.3s ease-in-out;
`;

export const HighlightLine = styled.div<{ tabsLength: number; focus: number }>`
  position: absolute;
  bottom: 0;
  left: ${({ tabsLength, focus }) =>
    focus ? css`calc(100% / ${tabsLength} * ${focus})` : "0"};
  width: calc(100% / ${({ tabsLength }) => tabsLength});
  height: 2px;

  background-color: ${({ theme }) => theme.main};
  transition: all 0.2s ease-in-out;
`;
