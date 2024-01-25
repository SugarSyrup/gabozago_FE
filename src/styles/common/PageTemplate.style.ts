import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  max-width: 500px;
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: ${({ theme }) => theme.white};
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding: 32px 20px;
`;
