import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  max-width: 500px;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.white};
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  //padding: 32px 20px;
`;
