import styled from "styled-components";

export const Header = styled.header`
  padding: 10px 20px 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  z-index: 30;

  width:100%;
  max-width:500px;

  &::before {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.gray04};
  }
`;

export const SearchButton = styled.button`
  height: fit-content;
  padding: 0;
  cursor: pointer;
  border: 0;
  background-color: transparent;
  border-radius: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.gray05};
  }

  svg {
    width: 24px;
    height: 24px;
    path {
      fill: ${({ theme }) => theme.gray};
    }
  }
`;
