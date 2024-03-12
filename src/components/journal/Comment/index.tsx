import * as S from "./style";
import Heading from "../../common/Heading";
import SendIcon from "../../../assets/icons/send.svg?react";
import CommentItem from "../CommentItem";
import { MouseEventHandler, useEffect, useRef, useState } from "react";

interface Props {
  commentInputPosition?: "bottom" | "top";
}

function Comment({ commentInputPosition = "top" }: Props) {
  const commentInputRef = useRef<HTMLInputElement>(null);
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState([]);

  const submitComment: MouseEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();

    if (commentInputRef.current !== null) {
      alert("전송: " + comment);
      commentInputRef.current.value = "";
      // @todo: 댓글 추가하기
    }
  };

  useEffect(() => {
    // @todo: id 가져와 댓글 목록 업데이트하기
    const comment = {
      id: "9de9f8ff-2a75-4294-Bf2f-7e06755395c8",
      name: "상은수",
      username: "user-wfd37gu",
      profileImage: "https://placehold.co/100x100/png",
      createDate: "2024-03-03/04:20:13",
      like: 71,
      text: "댓글내용",
      parentCommentId: "",
    };

    setComments([comment, comment, comment]);
  }, []);

  return (
    <>
      <S.Header position={commentInputPosition}>
        <Heading size="sm">
          댓글 <S.CommentCountSpan>{comments.length}</S.CommentCountSpan>
        </Heading>
      </S.Header>
      <S.CommentInputForm position={commentInputPosition}>
        <S.UserProfileImg />
        <S.CommentInputControlBox>
          <S.CommentInput
            ref={commentInputRef}
            type="text"
            placeholder="댓글 달기..."
            onChange={(e) => {
              setComment(e.target.value);
            }}
            onSubmit={submitComment}
          />
          <S.SendButton type="submit" onClick={submitComment}>
            <SendIcon />
          </S.SendButton>
        </S.CommentInputControlBox>
      </S.CommentInputForm>
      <S.Contents position={commentInputPosition}>
        {comments && comments.length !== 0 ? (
          <S.CommentList>
            {comments.map((item) => (
              <li>
                <CommentItem {...item} replys={[item, item, item]} />
              </li>
            ))}
          </S.CommentList>
        ) : (
          <S.NoCommentBox>
            <p>아직 댓글이 없습니다.</p>
            <p>가장 먼저 댓글을 남겨 보세요!</p>
          </S.NoCommentBox>
        )}
      </S.Contents>
    </>
  );
}

export default Comment;
