import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
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

export const Modal = styled.div<{ borderRadius: string }>`
  overflow: hidden;
  position: absolute;
  bottom: 0;
  width: 100%;
  max-height: 80vh;
  min-height: 330px;
  background-color: ${({ theme }) => theme.white};
  border-radius: ${({ borderRadius }) =>
    `${borderRadius} ${borderRadius} 0px 0px`};
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
`;

export const CloseHandle = styled.button`
  padding: 12px 0 16px;
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
  padding-top: 24px;
`;
