import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 18px 0;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header<{ size: "default" | "small" }>`
  margin-bottom: ${({ size }) => (size === "default" ? "16px" : "13px")};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const DetailList = styled.ul<{ column: boolean }>`
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  gap: ${({ column }) => (column ? "6" : "10")}px;
`;

const defaultDetailItem = css`
  font-size: 14px;
  line-height: 22px;

  svg {
    width: 22px;
    height: 22px;
  }
`;
const smallDetailItem = css`
  /* gap: 10px; */
  font-size: 12px;
  line-height: 18.5px;

  svg {
    width: 14px;
    height: 14px;
  }
`;
export const DetailItem = styled.li<{ size: "default" | "small" }>`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.gray};
  gap: 8px;

  ${({ size }) => (size === "default" ? defaultDetailItem : smallDetailItem)}

  span:first-of-type {
    display: flex;
    span {
      width: 0px;
      height: 0px;
      visibility: hidden;
    }
  }
`;
