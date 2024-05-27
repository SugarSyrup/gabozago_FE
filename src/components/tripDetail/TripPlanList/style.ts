import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 30px;
  width: 100%;
  background-color: ${({ theme }) => theme.white};
`;
export const DayFilterButton = styled.button`
  margin-bottom: 10px;
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
