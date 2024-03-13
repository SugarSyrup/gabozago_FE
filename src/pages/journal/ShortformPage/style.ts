import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  /* bottom: 120px; */
  left: 0;
  width: 100%;
  min-height: 90%;
  background-color: ${({ theme }) => theme.black};
`;
