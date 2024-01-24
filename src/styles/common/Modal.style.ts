import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  overflow: hidden;
  z-index: 30;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100vh;
    opacity: 30%;
    background-color: ${({ theme }) => theme.black};
  }
`;

export const Modal = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 330px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 30px 30px 0px 0px;
  box-shadow: 0 4 10px 0 rgba(0, 0, 0, 0.25);
`;

export const CloseHandle = styled.button`
  padding: 12px 0 30px;
  width: 100%;
  cursor: grab;
  border: 0;
  background-color: transparent;

  &:active {
    cursor: grabbing;
  }

  &::before {
    content: "";
    margin: auto;
    width: 55px;
    height: 4px;
    border-radius: 10px;
    display: block;
    background-color: ${({ theme }) => theme.gray02};
  }
`;

export const Title = styled.div`
  margin: 5px 0 20px;
  color: ${({ theme }) => theme.gray02};
  font-weight: 600;
`;

export const Contents = styled.div`
  padding: 0 25px;
`;
