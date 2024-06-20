import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  background-color: #f6f6f6;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const MyTravelItemThumbnailWrapper = styled.div`
  width: 68px;
  height: 68px;

  border-radius: 100%;
  background-color: #d4ddff;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  img {
    width: 100%;
    object-fit: contain;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const MyTravelItemTextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MyTravelItemText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;

  color: #424242;

  svg {
    width: 16px;
    height: 16px;

    path {
      fill: ${({ theme }) => theme.main};
    }
  }
`;

export const DayList = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DayItem = styled.div<{ isClicked: boolean }>`
  padding: 4px 15px;
  background-color: ${({ isClicked, theme }) => (isClicked ? theme.main : 'white')};
  color: ${({ isClicked, theme }) => (isClicked ? 'white' : theme.main)};
  border: 1px solid ${({ theme }) => theme.main};
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  text-align: center;
`;
