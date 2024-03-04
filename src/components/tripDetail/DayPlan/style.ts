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
export const PlaceList = styled.ol``;
