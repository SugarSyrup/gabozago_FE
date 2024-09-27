import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  padding: 12px 0;
`;

export const ContentsHeader = styled.div`
  width: calc(100% + 40px);
  margin-left: -20px;

  padding: 10px 20px;
  background-color: #f6f6f6;

  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.font.primary};
`;

export const FontHighlight = styled.span<{ isRead?: boolean }>`
  color: ${({ theme, isRead }) => (isRead ? theme.colors.red.primary : theme.colors.blue.primary)};
`;

export const ContentsContainer = styled.div`
  width: 100%;

  /* display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: repeat(auto-fill, 30%);
  justify-content: space-between;
  /* grid-column-gap: auto; */
  /* grid-gap: 20px; */

  padding: 16px 0;
`;

export const ContentItem = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    padding-bottom: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;

    position: absolute;
    object-fit: cover;
  }
`;

export const NoImgWrapper = styled.div<{ height: number | undefined }>`
  width: 100%;
  height: ${({ height }) => height}px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotWatched = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.8;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 10;

  h3 {
    position: absolute;
    color: white;
  }
`;

export const DeleteCheckedWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.blue.primary};
  opacity: 0.9;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 20;

  h3 {
    position: absolute;
    color: white;
  }
`;
export const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  padding: 4px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 8px;
  bottom: 8px;
  z-index: 20;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const Title = styled.div`
  width: 100%;
  padding: 8px 4px;
`;

export const EditButton = styled.div`
  width: 24px;
  height: 24px;

  border: 1px solid white;
  border-radius: 100%;

  position: absolute;
  top: 6px;
  left: 6px;
  z-index: 100;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditSVGWrapper = styled.div`
  position: absolute;
  top: 6px;
  left: 6px;
  z-index: 100;
`;

export const SearchingContainer = styled.div`
  height: 50dvh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
  }

  span {
    color: #424242;
    text-align: center;

    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 175% */
  }
`;

export const NoDataContainer = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 120px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    text-align: center;
  }
`;

export const TripBucketButton = styled.div`
  display: inline-flex;
  padding: 4px 15px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.blue.primary};
  background-color: white;

  color: ${({ theme }) => theme.colors.blue.primary};
  cursor: pointer;
`;
