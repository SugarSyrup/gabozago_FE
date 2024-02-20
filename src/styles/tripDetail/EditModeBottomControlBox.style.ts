import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px;
  width: 100%;
  height: 76px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.main};
`;

export const Button = styled.button`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;

  font-size: 14px;
  font-weight: 500;
  line-height: 22px;

  cursor: pointer;
  border: 0;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.main};
`;
