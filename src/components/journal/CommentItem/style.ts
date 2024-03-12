import styled from "styled-components";

export const Container = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const CommentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 6px;
`;

export const UserProfileImgBox = styled.div`
  flex: 0 0 fit-content;
  width: 34px;
  height: 34px;
  overflow: hidden;
`;

export const UserProfileImg = styled.img`
  width: 27px;
  height: 27px;
  border-radius: 50%;
  object-fit: cover;
`;
export const ContentsBox = styled.div`
  position: relative;
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 6px;
`;

export const MenuButton = styled.button`
  position: absolute;
  right: 0;
  width: 20px;
  height: 20px;
  padding: 0px;

  cursor: pointer;
  border: 0;
  background-color: transparent;
`;

export const UserNameSpan = styled.span`
  margin-right: 4px;

  font-size: 10px;
  font-weight: 600;
`;
export const TimestampSpan = styled.span`
  font-size: 10px;
  font-weight: 500;

  color: ${({ theme }) => theme.gray01};
`;

export const CommentParagraph = styled.p`
  margin-top: 6px;
  margin-bottom: 3px;
  width: 100%;
  line-height: 14px;
  font-size: 12px;
  font-weight: 400;
  word-break: keep-all;
`;

export const ActionBox = styled.div`
  display: flex;
  gap: 6px;
`;

export const IconButton = styled.button`
  cursor: pointer;
  padding: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  color: ${({ theme }) => theme.gray01};
  font-size: 10px;
  border: 0px;
  background-color: transparent;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const ReplyBox = styled.div`
  margin-top: 3px;
  margin-left: 40px;
`;

export const ReplyToggleButton = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  gap: 10px;

  cursor: pointer;
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.gray};

  font-size: 10px;
  font-weight: 400;
  line-height: 20px;

  &::before {
    display: inline-block;
    content: "";
    width: 20px;
    height: 1px;
    background-color: ${({ theme }) => theme.gray02};
  }
`;

export const ReplyList = styled.ol`
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
