import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% + 40px);
  transform: translateX(-20px);
`;
export const MapOpenButton = styled.button`
  display: block;
  border: 0;
  width: 100%;
  height: 24px;
  background-color: transparent;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;

    path {
      width: 24px;
      height: 24px;
      fill: ${({ theme }) => theme.gray02};
    }
  }
`;
