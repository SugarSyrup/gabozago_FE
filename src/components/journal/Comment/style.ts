import styled, { css } from "styled-components";
import UserIcon from "../../../assets/icons/user.svg?react";

export const Container = styled.div`
  width: 100%;
  word-break: keep-all;
`;

export const Header = styled.header`
  padding: 10px 16px 12px;
  border-bottom: 1px solid ${({ theme }) => theme.gray04};
`;

export const CommentCountSpan = styled.span`
  color: ${({ theme }) => theme.main};
`;

export const Contents = styled.div<{ position: "bottom" | "top" }>`
  padding: ${({ position }) =>
    position === "bottom" ? "16px 15px 100px" : "16px 0px"};
`;

export const CommentInputForm = styled.form<{ position: "bottom" | "top" }>`
  display: flex;
  flex-wrap: nowrap;
  gap: 7px;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.white};

  ${({ position }) =>
    position === "bottom"
      ? css`
          position: absolute;
          padding: 17px 16px 27px 10px;
          bottom: 0;
          left: 0;
          right: 0;

          border-top: 1px solid ${({ theme }) => theme.gray04};
        `
      : css`
          position: relative;
          padding: 8px 0;
        `}
`;

export const UserProfileImg = styled(UserIcon)`
  width: 34px;
  height: 34px;
  border-radius: 50%;

  path {
    fill: ${({ theme }) => theme.gray03};
  }
`;

export const CommentInputControlBox = styled.div`
  position: relative;
  flex: 1 1 100%;
`;

export const CommentInput = styled.input`
  width: 100%;
  padding: 9px 18px;
  line-height: 22px;

  border: 0;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.gray06};

  &::placeholder {
    color: ${({ theme }) => theme.gray02};
  }
`;

export const SendButton = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  padding: 0;
  width: 30px;

  transform: translateY(-50%);

  cursor: pointer;
  border: 0;
  background-color: transparent;

  svg {
    width: 30px;
    height: 30px;
  }

  &:hover,
  &:active {
    svg path {
      fill: ${({ theme }) => theme.gray02};
    }
  }
`;

export const CommentList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const NoCommentBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -65%);
  color: ${({ theme }) => theme.gray02};
  font-size: 12px;
  font-weight: 400;

  p:first-of-type {
    margin-bottom: 8px;
    color: ${({ theme }) => theme.black};
    font-size: 16px;
    font-weight: 500;
  }
`;
