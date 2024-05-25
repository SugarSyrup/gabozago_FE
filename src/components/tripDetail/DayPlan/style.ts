import styled from "styled-components";

export const Container = styled.div``;
export const DayInfo = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
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

export const EditButton = styled.button`
  padding: 0;
  border: 0;
  border-radius: 5px;
  background-color: transparent;
  font-size: 13px;
  line-height: 22px;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  color: ${({ theme }) => theme.gray01};

  &:hover {
    background-color: ${({ theme }) => theme.gray05};
  }
  &:active {
    background-color: ${({ theme }) => theme.gray04};
  }
`;
export const PlaceList = styled.ol`
  display: flex;
  flex-direction: column;
`;

export const PlaceItem = styled.li`
  display: grid;
  grid-template-columns: 35px 1fr;
  justify-items: center;
  gap: 20px;
`;

export const MarkerBox = styled.div<{ color: string }>`
  width: 18px;
  height: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  background-color: ${({ color }) => color};
  border-radius: 50%;
  line-height: 0;
`;
export const NumberSpan = styled.span`
  padding-top: 1px;
  margin: auto;
  line-height: 0;

  font-weight: 500;
  font-size: 11px;
  color: ${({ theme }) => theme.white};
`;
