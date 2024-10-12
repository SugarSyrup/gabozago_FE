import styled, { css } from 'styled-components';

export const Header = styled.header<{ position: 'bottom' | 'top' }>`
  width: 100%;
  padding: 20px 16px 12px;
  background-color: ${({ theme }) => theme.white};

  ${({ position }) =>
    position === 'bottom'
      ? css`
          position: absolute;
          top: 0;
          padding-top: 24px;
          z-index: 10;

          border-bottom: 1px solid ${({ theme }) => theme.gray04};
        `
      : css`
          border-top: 1px solid ${({ theme }) => theme.gray04};
        `}
`;

export const CommentCountSpan = styled.span`
  color: ${({ theme }) => theme.main};
`;

export const Contents = styled.div<{ position: 'bottom' | 'top' }>`
  ${({ position }) =>
    position === 'bottom'
      ? css`
          height: 80dvh;
          padding: 62px 0 120px;
          overflow-y: auto;
        `
      : css`
          padding: 16px 20px;
        `};
`;

export const CommentInputForm = styled.form<{ position: 'bottom' | 'top' }>`
  display: flex;
  flex-wrap: nowrap;
  gap: 7px;
  justify-content: space-between;
  align-items: start;

  background-color: ${({ theme }) => theme.white};

  ${({ position }) =>
    position === 'bottom'
      ? css`
          position: absolute;
          padding: 17px 16px 27px 10px;
          padding-top: constant(safe-area-inset-bottom, 27px);
          padding-bottom: constant(safe-area-inset-bottom, 27px);
          bottom: 0;
          left: 0;
          right: 0;

          border-top: 1px solid ${({ theme }) => theme.gray04};
          z-index: 10;
        `
      : css`
          position: relative;
          padding: 8px 20px;
        `}
`;

export const UserProfileImgBox = styled.div`
  flex: 0 0 fit-content;
  width: 33px;
  height: 33px;
  overflow: hidden;

  & > svg {
    width: 33px;
    height: 33px;
  }
`;

export const UserProfileImg = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  object-fit: cover;
`;
export const CommentInputControlBox = styled.div`
  position: relative;
  flex: 1 1 100%;
`;

export const CommentTextArea = styled.textarea`
  width: 100%;
  height: 40px;
  max-height: 150px;
  padding: 9px 18px;
  padding-right: 50px;
  line-height: 22px;
  resize: none;
  overflow-y: auto;

  font-size: 16px;

  border: 0;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.gray06};

  &::placeholder {
    color: ${({ theme }) => theme.gray02};
  }
`;

export const SendButton = styled.button<{ disabled: boolean }>`
  position: absolute;
  top: 5px;
  right: 12px;
  padding: 0;
  width: 30px;

  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  border: 0;
  background-color: transparent;

  svg {
    width: 30px;
    height: 30px;

    path {
      fill: ${({ $disabled, theme }) =>
        $disabled ? theme.colors.gray.secondary : theme.colors.blue.primary};
    }
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
