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

export const Contents = styled.div`
  padding: 16px 15px;
`;

export const CommentInputBox = styled.div<{ position: "bottom" | "top" }>`
  display: flex;
  gap: 7px;
  justify-content: space-between;
  align-items: center;

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
  border-radius: 50%;

  path {
    fill: ${({ theme }) => theme.gray03};
  }
`;

export const CommentInput = styled.input`
  flex: 1 1 100%;
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
  right: 28px;
  cursor: pointer;
  width: 30px;

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
