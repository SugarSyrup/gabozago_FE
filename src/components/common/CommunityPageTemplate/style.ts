import styled from 'styled-components';

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
  height: 100dvh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }

  overflow: auto;

  background-color: ${({ theme }) => theme.gray06};
`;

export const Header = styled.header`
  position: absolute;
  top: 0px;
  z-index: 10;

  width: 100%;
  padding: 16px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;

    path {
      fill: white;
      stroke: white;
    }
  }
`;
