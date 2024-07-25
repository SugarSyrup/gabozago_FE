import styled from 'styled-components';

export const HeadingWrapper = styled.div`
  padding-top: 15px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 15px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  background-color: white;
`;

export const BottomButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  svg {
    width: 28px;
    height: 28px;

    path {
      fill: white;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  background-color: white;
`;

export const MainContainer = styled.div`
  width: 100%;
  /* height: 100%; */

  display: flex;
  justify-content: center;
  align-items: center;
`;
