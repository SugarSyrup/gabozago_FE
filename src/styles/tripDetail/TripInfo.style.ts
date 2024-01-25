import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 18px 0;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  padding: 4px 12px;
  border: 0;
  border-radius: 15px;
  font-size: 13px;
  line-height: 22px;
  cursor: pointer;
  color: ${({ theme }) => theme.gray01};
  background-color: ${({ theme }) => theme.gray06};
`;

export const DetailList = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const DetailItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.gray};
  font-size: 14px;
  line-height: 22px;

  span:first-of-type {
    display: flex;
    span {
      width: 0px;
      height: 0px;
      visibility: hidden;
    }
  }
`;
