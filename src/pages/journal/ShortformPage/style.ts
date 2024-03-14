import styled from "styled-components";

export const Header = styled.header`
  padding: 40px 20px 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  justify-content: space-between;

  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.5) 80%
  );

  svg {
    cursor: pointer;
    path {
      fill: ${({ theme }) => theme.white};
      stroke: ${({ theme }) => theme.white};
    }
  }
`;

export const IconButton = styled.button`
  padding: 0;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding-bottom: 80px;
  width: 100%;
  min-height: 90%;
  background-color: ${({ theme }) => theme.black};
`;
