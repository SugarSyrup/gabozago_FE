import styled from "styled-components";
import bottomArrowImage from "../../assets/icons/arrow_bottom.svg";

export const Container = styled.div`
  width: 100%;
`;
export const DayFilterButton = styled.button`
  margin-bottom: 10px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
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
export const PlaceListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
