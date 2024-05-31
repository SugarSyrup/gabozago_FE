import styled from "styled-components";

export const Container = styled.div<{ header: boolean }>`
  margin: auto;
  height: auto;
  min-height: 100dvh;
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.white};
`;

export const Content = styled.div<{ header: boolean, nav: boolean }>`
  position: relative;
  width: 100%;
  padding: ${({ header }) => (header ? "0 20px" : "60px 20px")};
  padding-top: ${({ header }) => (header ? "50px" : "20px")};
  padding-bottom: ${({ nav }) => (nav ? "100px" : "60px")};
`;
