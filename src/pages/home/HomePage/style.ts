import styled from "styled-components";

export const Header = styled.header`
  padding: 40px 20px 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  z-index: 20;

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

export const ContentBox = styled.div`
  height: 100%;
  margin-top: 44px;
  padding-top: 4px;
`;
