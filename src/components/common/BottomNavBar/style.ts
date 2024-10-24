import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.white};
`;
export const NavList = styled.ul`
  margin: auto;
  margin-bottom: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const ListItem = styled.li<{ active?: boolean }>`
  a {
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    color: ${({ active, theme }) => (active ? theme.main : theme.gray02)};
    transition: all ease-in-out 0.3s;

    span {
      font-size: 10px;
      font-weight: 600;
      line-height: 12px;
      margin-top: 2px;
    }
    path {
      transition: all ease-in-out 0.3s;
      fill: ${({ active, theme }) => (active ? theme.main : theme.gray02)};
    }

    &:hover {
      color: ${({ theme }) => theme.main};
      path {
        fill: ${({ theme }) => theme.main};
      }
    }
  }
`;
