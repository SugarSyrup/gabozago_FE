import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background-color: ${({ theme }) => theme.white};
`;

export const Heading = styled.h1`
  width: 100%;
  padding: 40px 10px 10px;

  text-align: center;
  font-size: 18px;
  font-weight: bold;
  line-height: 22px;
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
  border-bottom: 2px solid
    ${({ theme, focused }) => (focused === true ? theme.main : theme.gray04)};

  transition: all 0.3s ease-in-out;
`;
export const Contents = styled.div`
  padding-top: 110px;
`;
