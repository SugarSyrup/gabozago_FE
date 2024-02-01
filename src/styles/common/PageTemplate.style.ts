import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: grid;
  grid-template-rows: 1fr fit-content(100%);
  margin: auto;
  max-width: 500px;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.white};
`;

export const Content = styled.div`
  width: 100%;
  overflow-y: auto;
  padding: 40px 20px;
`;
