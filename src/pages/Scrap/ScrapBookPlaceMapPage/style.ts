import styled from 'styled-components';

export const ModalOpenButton = styled.div`
  position: fixed;
  left: calc(50% - 60px);
  bottom: 50px;
  z-index: 1000;

  padding: 4px 16px;
  background-color: white;
  border-radius: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  cursor: pointer;
`;
