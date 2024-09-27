import styled from 'styled-components';

export const CurrentPositionWrapper = styled.div`
  position: absolute;
  top: 56px;
  right: 8px;

  background-color: white;
  padding: 4px;
  border-radius: 8px;
  cursor: pointer;
`;

export const ModalOpenButton = styled.div`
  position: fixed;
  left: calc(50% - 60px);
  bottom: 50px;
  z-index: 200;

  padding: 4px 16px;
  background-color: white;
  border-radius: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  cursor: pointer;
`;

export const FilterList = styled.ol`
  width: 100%;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 8px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  div {
    padding: 4px 16px;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.colors.blue.primary};
    color: ${({ theme }) => theme.colors.blue.primary};
  }
`;

export const ModalList = styled.ol`
  display: flex;
  flex-direction: column;
  max-height: 384px;
`;

export const PlaceList = styled.ol`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
    scrollbar-width: none;
  }
`;

export const PlaceItem = styled.li`
  width: 100%;
  padding: 16px 20px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  gap: 16px;

  background-color: 'white';
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

export const SelectedPlaceWrapper = styled.div`
  padding-left: 20px;

  width: calc(100% - 40px);
  max-width: 460px;

  height: 115px;
  background-color: white;
  border-radius: 8px;

  position: fixed;
  bottom: 24px;
  z-index: 250;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

export const PopupContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`;

export const CheckBoxContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  margin-top: 12px;

  position: relative;

  input {
    appearance: none; /* 원래 제공되는 체크박스 없애기 */
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.gray03};

    &:checked {
      border: 1px solid ${({ theme }) => theme.main};
      background: center no-repeat url('/check.svg');
      background-size: contain;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 20px;

  div {
    cursor: pointer;
    width: 45%;
    height: 44px;
    padding: 10px 16px;

    background-color: ${({ theme }) => theme.colors.blue.secondary};
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 16px;
      font-weight: 600;
      line-height: 28px;
    }
  }
`;
