import styled from 'styled-components';

export const SliderWrapper = styled.div`
  width: calc(100vw - 40px);
  max-width: 445px;
  position: relative;

  display: flex;
  flex-basis: 100%;
  margin-top: 26px;

  overflow: hidden;
`;

export const SliderItem = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
`;

export const Header = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 28px;
    height: 28px;
    cursor: pointer;
  }

  span {
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 250px;

  margin-top: 20px;
`;

export const PlaceState = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  margin-top: 10px;
  margin-bottom: 20px;

  span:first-child {
    font-size: 12px;
    font-weight: 600;
    line-height: 22px;
  }

  span:last-child {
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
  }
`;

export const SeperateLine = styled.div`
  width: calc(100% - 24px);
  border-bottom: 1px solid #adadad;
`;

export const PlaceInfomationContainer = styled.div`
  box-sizing: border-box;
  width: calc(100% - 76px);
  margin: 24px 0px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const PlaceInfomation = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  svg {
    width: 20px;
    height: 20px;

    path {
      fill: ${({ theme }) => theme.gray};
    }
  }

  span {
    color: ${({ theme }) => theme.gray};
    font-size: 13px;
    font-weight: 400;
  }
`;
