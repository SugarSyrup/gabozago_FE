import styled from 'styled-components';

// Banner
export const Banner = styled.section`
  width: calc(100% + 20px);
  padding-right: 20px;
  padding-top: 16px;
  padding-bottom: 24px;
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TripBanner = styled.div`
  flex-shrink: 0;
  scroll-snap-align: center;

  width: calc(100% - 20px);
  padding: 16px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  background-color: #dde5ff;
  position: relative;

  img {
    width: 110px;
    height: 110px;

    position: absolute;
    right: 31.5px;
    bottom: -18.361px;
  }
`;

export const BucketBanner = styled.div`
  flex-shrink: 0;
  scroll-snap-align: center;

  width: calc(100% - 20px);
  padding: 16px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  background: linear-gradient(93deg, #fff6e2 0.89%, #ddf5ff 99.11%);
  position: relative;

  img {
    width: 114px;
    height: 78px;

    position: absolute;
    right: 16px;
    top: 11px;
  }
`;

export const BannerCount = styled.div`
  display: flex;
  padding: 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  position: absolute;
  right: 54px;
  top: 140px;
  border-radius: 100px;
  background: rgba(0, 0, 0, 0.4);

  color: white;
`;
