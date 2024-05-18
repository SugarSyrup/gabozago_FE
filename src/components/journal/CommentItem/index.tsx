import * as S from "./style";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import UserIcon from "../../../assets/icons/user.svg?react";
import ChatBubbleIcon from "../../../assets/icons/chatBubble.svg?react";
import ClapIcon from "../../../assets/icons/clap.svg?react";
import ClapBlueIcon from "../../../assets/icons/clap_blue.svg?react";
import KebabMenuIcon from "../../../assets/icons/menu_kebab.svg?react";
import ExclamationIcon from "../../../assets/icons/exclamation_circle.svg?react";
import DeleteIcon from "../../../assets/icons/delete.svg?react";
import useModal from "../../../hooks/useModal";
import MenuOptionList from "../../../components/common/MenuOptionList";
import { post } from "../../../utils/api";

export interface Comment {
  id: number;
  name: string;
  userId: number;
  profileImage: string;
  createDate: string;
  like: number;
  text: string;
  parentCommentId: null | number;
}

interface Props extends Comment {
  isMine: boolean;
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
  type,
}: Props) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
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

  const toggleLike = async () => {
    // @todo: 좋아요 버튼 토글 요청
    try {
      const response = await post<{ message: string }>(
        `community/${type}/comment/${id}/like`
      );
      if (response.message.include("SUCCESS")) {
        setIsLiked((prev) => !prev);
      }
    } catch (error) {
      console.log(error.response.data.message);
      if (error.response.data.message === "It's your comment!") {
        alert("내가 작성한 댓글은 좋아요 할 수 없습니다.");
      }
    }
  };

  useEffect(() => {
    console.log(text);
    console.log(parentCommentId);
    // @todo: 유저 정보에서 좋아요 클릭한 댓글 정보 불러와 isLiked 설정하기
  }, []);

  const myCommentMenus = [
    {
      icon: (
        <S.GrayColoredIcon>
          <DeleteIcon />
        </S.GrayColoredIcon>
      ),
      name: "삭제하기",
      onClick: () => {
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
              {like}
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
                  <CommentItem {...item} isReply={true} />
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
