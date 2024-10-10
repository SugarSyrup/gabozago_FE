import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% + 40px);
  margin-left: -20px;

  position: relative;

  img {
    width: 100%;
    height: 460px;
  }
`;

export const Slider = styled.div`
  width: 100%;

  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  flex-direction: row;
  gap: 16px;

  position: absolute;
  top: 32px;

  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  &::-webkit-scrollbar {
    display: none;
    scrollbar-width: none;
  }
`;

export const SliderItem = styled.div`
  scroll-snap-align: center;
  flex-shrink: 0;
  width: 270px;
  height: 100%;

  padding: 16px;

  border-radius: 8px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 0px 14.1px 0px rgba(0, 0, 0, 0.09);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  color: white;
`;

export const SliderItemTitle = styled.div``;

export const RecommendList = styled.ol`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PlaceImg = styled.img`
  width: 44px !important;
  height: 44px !important;

  border-radius: 100%;
`;

export const RecommendItem = styled.li`
  width: 100%;

  padding-top: 8px;
  padding-bottom: 8px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;

  position: relative;
  border-bottom: 1px solid rgba(231, 231, 231, 0.5);
`;

export const RecommendIconWrapper = styled.div`
  position: absolute;
  right: 0px;

  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;

    path {
      fill: white;
    }
  }
`;

export const RecommendItemDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  label:first-child {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.048px;
  }
  label:last-child {
    color: #fff;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 183.333% */
    letter-spacing: -0.036px;
  }
`;
