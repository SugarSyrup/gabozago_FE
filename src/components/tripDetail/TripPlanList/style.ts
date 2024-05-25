import styled from "styled-components";

export const Container = styled.div`
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
export const EditComplateButton = styled.button`
  position: absolute;
  right: 0;
  padding: 0;
  border: 0;
  border-radius: 5px;
  background-color: transparent;
  font-size: 13px;
  line-height: 22px;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  color: ${({ theme }) => theme.main};

  &:hover {
    background-color: ${({ theme }) => theme.blue05};
  }
  &:active {
    background-color: ${({ theme }) => theme.blue04};
  }
`;
