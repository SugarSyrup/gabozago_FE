import * as S from "./style";
import Heading from "../../common/Heading";
import SendIcon from "../../../assets/icons/send.svg?react";
import CommentItem, { Comment as TComment } from "../CommentItem";
import { useEffect, useState } from "react";
import { get, post } from "../../../utils/api";

interface Props {
  id: number;
  commentInputPosition?: "bottom" | "top";
}

function Comment({ id, commentInputPosition = "top" }: Props) {
  const [parentCommentId, setParentCommentId] = useState<number | null>(null);
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<TComment[]>([]);

  const getComments = async (id: number) => {
    const { data } = await get<TComment[]>(
      `community/short-form/${id}/comment`
    );
    setComments(data);
  };

  const submitComment = async () => {
    await post<{
      shortformId: number;
      parentCommentId: number | null;
      content: string;
    }>(`/community/short-form/comment`, {
      shortformId: id,
      parentCommentId: null,
      content: comment,
    });

    getComments(id);
    setComment("");
  };

  useEffect(() => {
    getComments(id);
  }, []);

  return (
    <>
      <S.Header position={commentInputPosition}>
        <Heading size="sm">
          댓글 <S.CommentCountSpan>{comments.length}</S.CommentCountSpan>
        </Heading>
      </S.Header>
      <S.CommentInputForm
        position={commentInputPosition}
        onSubmit={(e) => {
          e.preventDefault();
          submitComment();
        }}
      >
        <S.UserProfileImg />
        <S.CommentInputControlBox>
          <S.CommentInput
            type="text"
            placeholder="댓글 달기..."
            maxLength={1500}
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <S.SendButton disabled={comment.length === 0} type="submit">
            <SendIcon />
          </S.SendButton>
        </S.CommentInputControlBox>
      </S.CommentInputForm>
      <S.Contents position={commentInputPosition}>
        {comments && comments.length !== 0 ? (
          <S.CommentList>
            {comments.map((item) => (
              <li key={`comment-shortform-${item.id}`}>
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
