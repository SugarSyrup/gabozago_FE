import * as S from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";

import UserIcon from "../../../assets/icons/user.svg?react";
import ChatBubbleIcon from "../../../assets/icons/chatBubble.svg?react";
import ClapIcon from "../../../assets/icons/clap.svg?react";
import ClapBlueIcon from "../../../assets/icons/clap_blue.svg?react";
import KebabMenuIcon from "../../../assets/icons/menu_kebab.svg?react";
import ExclamationIcon from "../../../assets/icons/exclamation_circle.svg?react";
import DeleteIcon from "../../../assets/icons/delete.svg?react";
import useModal from "../../../hooks/useModal";
import MenuOptionList from "../../../components/common/MenuOptionList";
import { deletes, post } from "../../../utils/api";
import useConfirm from "../../../hooks/useConfirm";

export interface Comment {
  id: number;
  name: string;
  userId: number;
  isClapped: boolean;
  isMine: boolean;
  profileImage: string;
  createDate: string;
  like: number;
  text: string;
  parentCommentId: null | number;
}

interface Props extends Comment {
  isReply?: boolean;
  replys?: Comment[] | null;
  reply?: {
    isReplyMode: boolean;
    parentCommentId: number | null;
  };
  setReply?: React.Dispatch<
    React.SetStateAction<{
      isReplyMode: boolean;
      parentCommentId: number | null;
    }>
  >;
  inputRef?: React.RefObject<HTMLInputElement>;
  type: "short-form" | "article" | "video" | "report" | "travelog";
  deleteComments: (commentId: number) => void;
}

function CommentItem({
  id,
  name,
  userId,
  profileImage,
  createDate,
  like,
  text,
  parentCommentId,
  inputRef,
  isReply = false,
  replys = [],
  reply,
  setReply,
  isMine,
  isClapped,
  type,
  deleteComments,
}: Props) {
  const [likeCount, setLikeCount] = useState<number>(like);
  const [isLiked, setIsLiked] = useState<boolean>(isClapped);
  const [isReplyOpened, setIsReplyOpened] = useState<boolean>(false);
  const {
    Modal: CommentMenuModal,
    modalOpen: commentMenuModalOpen,
    modalClose: commentMenuModalClose,
  } = useModal({
    title: "댓글",
    handle: true,
    borderRadius: "16px",
  });
  const { ConfirmPopup, confirmPopupOpen, confirmPopupClose } = useConfirm(
    "댓글을 삭제하시겠어요?",
    "삭제한 댓글은 되돌릴 수 없습니다.",
    null,
    "아니요",
    "네, 삭제할래요"
  );

  const toggleLike = async () => {
    try {
      const { data } = await post<{ clap: number }>(
        `community/${type}/comment/${id}/like`
      );
      setIsLiked((prev) => !prev);
      setLikeCount(data.clap);
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
      if (error.response.data.message === "It's your comment!") {
        alert("내가 작성한 댓글은 좋아요 할 수 없습니다.");
      }
    }
  };

  const myCommentMenus = [
    {
      icon: (
        <S.GrayColoredIcon>
          <DeleteIcon />
        </S.GrayColoredIcon>
      ),
      name: "삭제하기",
      onClick: () => {
        confirmPopupOpen();
        commentMenuModalClose();
      },
    },
  ];
  const notMyCommentMenus = [
    {
      icon: <ExclamationIcon />,
      name: "신고하기",
      onClick: () => {
        commentMenuModalClose();
      },
    },
  ];

  return (
    <S.Container
      isReply={isReply}
      isFocused={reply?.isReplyMode === true && reply?.parentCommentId === id}
      onClick={() => {
        if (setReply && reply?.isReplyMode) {
          setReply({ isReplyMode: false, parentCommentId: null });
        }
      }}
    >
      <ConfirmPopup
        onConfirm={() => {
          deleteComments(id);
        }}
      />
      <CommentMenuModal>
        <MenuOptionList menus={isMine ? myCommentMenus : notMyCommentMenus} />
      </CommentMenuModal>
      <S.CommentBox>
        <Link to={`/profile/${userId}`}>
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
              commentMenuModalOpen();
            }}
          >
            <KebabMenuIcon />
          </S.MenuButton>
          <div>
            <Link to={`/profile/${userId}`}>
              <S.UserNameSpan>{name}</S.UserNameSpan>
            </Link>
            <S.TimestampSpan>{createDate}</S.TimestampSpan>
          </div>
          <S.CommentParagraph>{text}</S.CommentParagraph>
          <S.ActionBox>
            <S.IconButton
              onClick={() => {
                toggleLike();
              }}
            >
              {isLiked ? <ClapBlueIcon /> : <ClapIcon />}
              {likeCount}
            </S.IconButton>
            {parentCommentId === null && (
              <S.IconButton
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (setReply && inputRef?.current) {
                    setReply({ isReplyMode: true, parentCommentId: id });
                    inputRef.current.focus();
                  }
                }}
              >
                <ChatBubbleIcon />
                답글달기
              </S.IconButton>
            )}
          </S.ActionBox>
        </S.ContentsBox>
      </S.CommentBox>
      {replys && replys.length !== 0 && (
        <S.ReplyBox>
          {isReplyOpened ? (
            <>
              <S.ReplyList>
                {replys.map((item) => (
                  <CommentItem {...item} isReply={true} type={type} />
                ))}
              </S.ReplyList>
              <S.ReplyToggleButton
                onClick={() => {
                  setIsReplyOpened((prev) => !prev);
                }}
              >
                접기
              </S.ReplyToggleButton>
            </>
          ) : (
            <S.ReplyToggleButton
              onClick={() => {
                setIsReplyOpened((prev) => !prev);
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
