import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 10px;
`;
export const DayParagraph = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;

  color: ${({ theme }) => theme.black};
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;

  span {
    margin-left: 5px;
    font-weight: 500;
    color: ${({ theme }) => theme.gray01};
    font-size: 13px;
  }
`;

export const PlaceList = styled.ol<{ isDraggingOver: boolean }>`
  position: relative;
  background-color: ${({ isDraggingOver, theme }) => (isDraggingOver ? theme.blue03 : theme.white)};
`;
