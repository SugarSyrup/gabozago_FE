import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 30px;
  width: 100%;
  background-color: ${({ theme }) => theme.white};
`;
export const DayFilterButton = styled.button`
  margin: 15px 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border-radius: 8px;
  border: 0;
  background-color: transparent;
  font-size: 13px;
  line-height: 22px;
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.gray05};
  }
  &:active {
    background-color: ${({ theme }) => theme.gray04};
  }
`;
export const PlaceListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ModalHeader = styled.div<{ isHighlight: boolean }>`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  color: ${({ isHighlight, theme }) => isHighlight && theme.main};
  svg {
    width: 28px;
    height: 28px;
  }
`;
export const ModalContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  gap: 20px;
`;

export const DayItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 28px;
    height: 28px;
  }
`;

export const DayInfo = styled.div<{ isHighlight: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  h3:nth-child(1) {
    color: #121212;
    color: ${({ isHighlight, theme }) => isHighlight && theme.main};
  }
  h3:nth-child(2) {
    color: #424242;
    color: ${({ isHighlight, theme }) => isHighlight && theme.main};
  }
`;
