import styled from 'styled-components';

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

export const PlaceList = styled.ol`
  width: calc(100% + 40px);
  margin-left: -20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PlaceItem = styled.li<{ $isChecked: boolean }>`
  width: 100%;
  padding: 16px 20px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  gap: 16px;

  background-color: ${({ theme, $isChecked }) =>
    $isChecked ? theme.colors.blue.secondary : 'white'};
`;

export const ThumbnailWrapper = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 10px;
`;

export const NoThumbnailWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 10px;
`;

export const PlaceInfomation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const PlaceThemeNAddress = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const InfoSeperateLine = styled.div`
  width: 1px;
  height: 8px;
  border-right: 1px solid ${({ theme }) => theme.colors.gray.secondary};
`;

export const MapButton = styled.div`
  display: inline-flex;
  height: 40px;
  padding: 2px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 100px;
  background: ${({ theme }) => theme.colors.blue.primary};
  color: white;

  position: fixed;
  bottom: 90px;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const NoScrapedPlace = styled.div`
  width: 100%;
  height: 60vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    text-align: center;
    color: ${({ theme }) => theme.colors.gray.secondary};
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
