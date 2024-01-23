import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
`;
export const NavList = styled.ul`
  margin: auto;
  margin-bottom: 19px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
export const ListItem = styled.li`
  a {
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  /* width: 100%; */
`;
