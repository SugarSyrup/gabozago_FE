import * as S from "./style";
import Heading from "../../common/Heading";
import SendIcon from "../../../assets/icons/send.svg?react";

interface Props {
  commentInputPosition?: "bottom" | "top";
}
function Comment({ commentInputPosition = "top" }: Props) {
  const comments: object[] | null = [];
  return (
    <S.Container>
      <S.Header>
        <Heading size="sm">
          댓글 <S.CommentCountSpan>{comments.length}</S.CommentCountSpan>
        </Heading>
      </S.Header>
      <S.CommentInputBox position={commentInputPosition}>
        <S.UserProfileImg />
        <S.CommentInput type="text" placeholder="댓글 달기..." />
        <S.SendButton
          onClick={() => {
            alert("전송");
          }}
        >
          <SendIcon />
        </S.SendButton>
      </S.CommentInputBox>
      <S.Contents>
        {comments && comments.length !== 0 ? (
          <>
            <div>댓글1</div>
            <div>댓글2</div>
            <div>댓글3</div>
          </>
        ) : (
          <S.NoCommentBox>
            <p>아직 댓글이 없습니다.</p>
            <p>가장 먼저 댓글을 남겨 보세요!</p>
          </S.NoCommentBox>
        )}
      </S.Contents>
    </S.Container>
  );
}

export default Comment;
