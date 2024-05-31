import styled from "styled-components";

export const Nav = styled.nav<{ backgroundColor: string }>`
  width: 100%;
  max-width: 500px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  z-index: 20;
  position: fixed;
  bottom:0px;
`;

export const NavList = styled.ul`
  margin: auto;
  margin-bottom: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const ListItem = styled.li<{ active?: boolean; activeColor: string }>`
  a {
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    color: ${({ active, activeColor, theme }) =>
      active
        ? activeColor === "white"
          ? theme.white
          : theme.main
        : theme.gray02};
    transition: all ease-in-out 0.3s;

    span {
      font-size: 10px;
      font-weight: 600;
      line-height: 12px;
      margin-top: 2px;
    }
    path {
      transition: all ease-in-out 0.3s;
      fill: ${({ active, activeColor, theme }) =>
        active
          ? activeColor === "white"
            ? theme.white
            : theme.main
          : theme.gray02};
    }

    &:hover {
      color: ${({ theme }) => theme.main};
      path {
        fill: ${({ theme }) => theme.main};
      }
    }
  }
`;
