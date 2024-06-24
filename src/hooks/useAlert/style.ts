import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
  0% {
    opacity: 0;
    display: none;
  }
  10% {
    opacity: 1;
    display:flex;
  }
  90% {
    opacity: 1;
    display:flex;
  }
  100% {
    opacity: 0;
    display:none;
  }
`;

export const AlertWrapper = styled.div`
  width: 100%;
  max-width: 500px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 40;
`;

export const Alert = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 42px;
  padding: 10px 20px;
  margin: 20px 32px 100px;

  border-radius: 30px;
  background-color: ${({ theme }) => theme.main};

  animation: ${fadeInOut} 3s ease-out;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;

  svg {
    width: 18px;
    height: 18px;

    path {
      fill: white;
    }
  }
`;
