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
      <S.Contents>
        <S.CommentInputBox position={commentInputPosition}>
          <S.UserProfileImg src={`${userIcon}`} />
          <S.CommentInput type="text" placeholder="댓글 달기..." />
          <S.SendButton
            onClick={() => {
              alert("전송");
            }}
          >
            <SendIcon />
          </S.SendButton>
        </S.CommentInputBox>
        {comments && comments.length !== 0 ? (
          <>
            <div>댓글1</div>
            <div>댓글2</div>
            <div>댓글3</div>
          </>
        ) : (
          <>댓글없듬</>
        )}
      </S.Contents>
    </S.Container>
  );
}

export default Comment;
