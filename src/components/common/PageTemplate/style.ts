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
  max-height: 100dvh;
  width: 100%;
  min-height: 100dvh;
  overflow-y: auto;
  overflow-x: hidden;
  /* @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  } */
  /* height: auto;
  min-height: 100dvh; */
  background-color: ${({ theme }) => theme.white};
`;

export const Content = styled.div<{ header: boolean }>`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100dvh;
  /* @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  } */
  padding: ${({ header }) => (header ? "0 20px" : "40px 20px")};
  padding-bottom: 140px;
`;
