import * as S from "./style";
import Heading from "../../common/Heading";
import SendIcon from "../../../assets/icons/send.svg?react";
import CommentItem from "../CommentItem";

interface Props {
  commentInputPosition?: "bottom" | "top";
}
function Comment({ commentInputPosition = "top" }: Props) {
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
        <CommentItem {...comment} replys={[comment, comment, comment]} />
        {/* {comments && comments.length !== 0 ? (
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
        )} */}
      </S.Contents>
    </S.Container>
  );
}

export default Comment;
