import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const DayInfo = styled.p`
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
export const PlaceListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const PlaceList = styled.ol``;
