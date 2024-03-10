import * as S from "./style";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import UserIcon from "../../../assets/icons/user.svg?react";
import ChatBubbleIcon from "../../../assets/icons/chatBubble.svg?react";
import ClapIcon from "../../../assets/icons/clap.svg?react";
import ClapBlueIcon from "../../../assets/icons/clap_blue.svg?react";
import KebabMenuIcon from "../../../assets/icons/menu_kebab.svg?react";

interface Props {
  id: string;
  name: string;
  username: string;
  profileImage: string;
  createDate: string;
  text: string;
  like: number;
  replys?: Props[];
}

function CommentItem({
  id,
  name,
  username,
  profileImage,
  createDate,
  text,
  like,
  replys,
}: Props) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isReplyOpend, setIsReplyOpend] = useState<boolean>(false);

  const toggleLike = () => {
    // @todo: 좋아요 버튼 토글 요청
    alert("좋아요 누름");
  };
  const addReply = () => {
    // @todo: id에 맞게 답글달기 비동기 요청
    alert("id: " + id);
  };

  useEffect(() => {
    // @todo: 유저 정보에서 좋아요 클릭한 댓글 정보 불러와 isLiked 설정하기
  }, []);

  return (
    <S.Container>
      <S.CommentBox>
        <Link to={`/profile/${username}`}>
          <S.UserProfileImgBox>
            {profileImage ? (
              <S.UserProfileImg src={profileImage} />
            ) : (
              <UserIcon />
            )}
          </S.UserProfileImgBox>
        </Link>
        <S.ContentsBox>
          <S.MenuButton
            onClick={() => {
              // @todo: 삭제 혹은 신고
              alert("@todo: 삭제 혹은 신고");
            }}
          >
            <KebabMenuIcon />
          </S.MenuButton>
          <div>
            <Link to={`/profile/${username}`}>
              <S.UserNameSpan>{name}</S.UserNameSpan>
            </Link>
            <S.TimestampSpan>{createDate}</S.TimestampSpan>
          </div>
          <S.CommentParagraph>{text}</S.CommentParagraph>
          <S.ActionBox>
            <S.IconButton
              onClick={() => {
                setIsLiked((prev) => !prev);
                toggleLike();
              }}
            >
              {isLiked ? <ClapIcon /> : <ClapBlueIcon />}
              <span>{like}</span>
            </S.IconButton>
            <S.IconButton onClick={addReply}>
              <ChatBubbleIcon />
              <span>답글달기</span>
            </S.IconButton>
          </S.ActionBox>
        </S.ContentsBox>
      </S.CommentBox>
      {replys && replys.length !== 0 && (
        <S.ReplyBox>
          {isReplyOpend ? (
            <>
              <S.ReplyList>
                {replys.map((item) => (
                  <CommentItem {...item} />
                ))}
              </S.ReplyList>
              <S.ReplyToggleButton
                onClick={() => {
                  setIsReplyOpend((prev) => !prev);
                }}
              >
                접기
              </S.ReplyToggleButton>
            </>
          ) : (
            <S.ReplyToggleButton
              onClick={() => {
                setIsReplyOpend((prev) => !prev);
              }}
            >
              {replys.length}개 답글보기
            </S.ReplyToggleButton>
          )}
        </S.ReplyBox>
      )}
    </S.Container>
  );
}

export default CommentItem;
