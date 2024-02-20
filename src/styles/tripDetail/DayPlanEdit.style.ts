import styled from "styled-components";

export const Container = styled.div``;
export const DaySpan = styled.span`
  display: block;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.black};
`;

export const PlaceList = styled.ol`
  position: relative;
`;
