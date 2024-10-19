import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  height: auto;
  min-height: 100dvh;
  width: 100%;
  max-width: 500px;
  margin-left: -20px;

  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0px;
  z-index: 1000000;

  svg {
    width: 100px;
    height: 100px;
  }
`;
