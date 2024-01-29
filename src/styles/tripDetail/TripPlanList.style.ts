import styled from "styled-components";
import bottomArrowImage from "../../assets/icons/arrow_bottom.svg";

export const Container = styled.div`
  width: 100%;
`;
export const DayFilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0px 5px 8px;
  border-radius: 8px;
  border: 0;
  background-color: transparent;
  font-size: 13px;
  line-height: 22px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.gray05};
  }
  &:active {
    background-color: ${({ theme }) => theme.gray04};
  }

  &::after {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    background: url(${bottomArrowImage}) no-repeat center;
  }
`;
export const EditButton = styled.button`
  padding: 5px;
  border: 0;
  border-radius: 5px;
  background-color: transparent;
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
