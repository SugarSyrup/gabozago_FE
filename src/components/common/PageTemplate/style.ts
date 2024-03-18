import styled from "styled-components";

export const Container = styled.div<{ header: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: grid;
  grid-template-rows: ${({ header }) =>
    header
      ? "fit-content(100%) 1fr fit-content(100%)"
      : "1fr fit-content(100%)"};
  grid-template-columns: 100%;
  margin: auto;
  max-width: 500px;
  max-height: 100vh;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.white};
`;

export const Content = styled.div<{ header: boolean }>`
  width: 100%;
  overflow-y: auto;
  padding: ${({ header }) => (header ? "0 20px" : "40px 20px")};
`;
