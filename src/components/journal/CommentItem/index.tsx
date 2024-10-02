import { Link } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';
import * as S from './style';

import UserIcon from '../../../assets/icons/user.svg?react';
import ChatBubbleIcon from '../../../assets/icons/chatBubble.svg?react';
import ClapIcon from '../../../assets/icons/clap.svg?react';
import ClapBlueIcon from '../../../assets/icons/clap_blue.svg?react';
import KebabMenuIcon from '../../../assets/icons/menu_kebab.svg?react';
import ExclamationIcon from '../../../assets/icons/exclamation_circle.svg?react';
import DeleteIcon from '../../../assets/icons/delete.svg?react';
import BlockedIcon from '@_icons/BlockedUser.svg?react';
import useModal from '../../../hooks/useModal';
import MenuOptionList from '../../common/MenuOptionList';
import { post } from '@_utils/api';
import useReportPopup from '../../../hooks/useReportPopup';
import Typography from '../../common/Typography';
import CommentDeleteToast from '../../common/Toast/Toast/CommentDeleteToast';
import { Toast } from '@_common/Toast';
import { useSetRecoilState } from 'recoil';
import { popupValue } from '@_recoil/common/PopupValue';
import usePopup from '../../../hooks/usePopup';

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
  isBlocked: boolean;
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
  textareaRef?: React.RefObject<HTMLTextAreaElement>;
  type: 'short-form' | 'article' | 'video' | 'report' | 'travelog';
  deleteComments: (commentId: number) => void;
  getComments: () => void;
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
  textareaRef,
  isReply = false,
  replys = [],
  reply,
  setReply,
  isMine,
  isClapped,
  isBlocked,
  type,
  deleteComments,
  getComments,
}: Props) {
  const [likeCount, setLikeCount] = useState<number>(like);
  const [isLiked, setIsLiked] = useState<boolean>(isClapped);
  const [isReplyOpened, setIsReplyOpened] = useState<boolean>(false);
  const [isReported, setIsReported] = useState<boolean>(false);
  const {
    Modal: CommentMenuModal,
    modalOpen: commentMenuModalOpen,
    modalClose: commentMenuModalClose,
  } = useModal({
    title: '댓글',
    handle: true,
    borderRadius: '16px',
  });
  const { reportPopupOpen } = useReportPopup({
    type,
    commentId: id,
    setIsReported,
    refresh: getComments,
  });
  const setPopupUI = useSetRecoilState(popupValue);
  const { popupOpen, popupClose } = usePopup();

  const toggleLike = async () => {
    try {
      const { data } = await post<{ clap: number }>(`community/${type}/comment/${id}/like`);
      setIsLiked((prev) => !prev);
      setLikeCount(data.clap);
    } catch (error) {
      if (error.response.data.message === "It's your comment!") {
        alert('내가 작성한 댓글은 좋아요 할 수 없습니다.');
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
      name: '삭제하기',
      onClick: () => {
        deleteComments(id);
        toast.custom(() => <CommentDeleteToast />);
        commentMenuModalClose();
      },
    },
  ];
  const notMyCommentMenus = [
    {
      icon: <ExclamationIcon />,
      name: '신고하기',
      iconColor: 'white',
      onClick: () => {
        if (isReported) {
          toast.custom(() => (
            <Toast>
              <Typography.Body size="lg" color="white">
                이미 신고한 댓글입니다.
              </Typography.Body>
            </Toast>
          ));
          commentMenuModalClose();
          return;
        }

        reportPopupOpen();
        commentMenuModalClose();
      },
    },
    {
      icon: (
        <S.BlockedIconWrapper>
          <BlockedIcon />
        </S.BlockedIconWrapper>
      ),
      name: '사용자 차단하기',
      onClick: () => {
        setPopupUI({
          Icon: <ExclamationIcon />,
          Header: '이 사용자 차단하시겠어요?',
          Description: `모든 아티클에서 이 사용자의 댓글을
          보지 않도록 차단합니다.`,
          ConfirmButton: {
            text: '확인',
            onClick: () => {
              post('/community/article/block', {
                userId,
              }).then(() => {
                getComments();
                popupClose();
                commentMenuModalClose();
              });
            },
          },
          CloseButton: {
            text: '취소',
            onClick: () => {
              popupClose();
            },
          },
        });
        popupOpen();
      },
    },
  ];
  const blockedMenus = [
    {
      icon: (
        <S.BlockedIconWrapper>
          <BlockedIcon />
        </S.BlockedIconWrapper>
      ),
      name: '차단 해제하기',
      onClick: () => {
        setPopupUI({
          Icon: <ExclamationIcon />,
          Header: '차단을 해제하시겠어요?',
          Description: `모든 아티클에서 이 사용자의 댓글을
확인할 수 있습니다.`,
          ConfirmButton: {
            text: '확인',
            onClick: () => {
              post('/community/article/block', {
                userId,
              }).then(() => {
                getComments();
                popupClose();
                commentMenuModalClose();
              });
            },
          },
          CloseButton: {
            text: '취소',
            onClick: () => {
              popupClose();
            },
          },
        });
        popupOpen();
      },
    },
  ];

  function createDateString(date: string) {
    const parsedDate = new Date(date);
    const currentDate = new Date();

    const diffMSec = currentDate.getTime() - parsedDate.getTime();
    const diffHours = Math.floor(diffMSec / (60 * 60 * 1000));

    if (diffHours === 0) {
      return `${Math.floor(diffMSec / (60 * 1000))}분 전`;
    }
    if (diffHours < 24) {
      return `${diffHours}시간 전`;
    }
    return `${Math.floor(diffHours / 24)}일 전`;
  }

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
        {isBlocked ? (
          <MenuOptionList menus={blockedMenus} />
        ) : (
          <MenuOptionList menus={isMine ? myCommentMenus : notMyCommentMenus} />
        )}
      </CommentMenuModal>
      <S.CommentBox>
        <div>
          <S.UserProfileImgBox>
            {profileImage ? <S.UserProfileImg src={profileImage} /> : <UserIcon />}
          </S.UserProfileImgBox>
        </div>
        <S.ContentsBox>
          <S.MenuButton
            onClick={() => {
              commentMenuModalOpen();
            }}
          >
            <KebabMenuIcon />
          </S.MenuButton>
          <div>
            {/* <Link to={`/profile/${userId}`}> */}

            <S.UserNameSpan>{name}</S.UserNameSpan>

            <S.TimestampSpan>{createDateString(createDate)}</S.TimestampSpan>
          </div>

          {isBlocked ? (
            <S.BlockedContent
              onClick={() => {
                commentMenuModalOpen();
              }}
            >
              차단한 사용자의 댓글입니다. 댓글을 보시려면 차단을 해제해 주세요.
            </S.BlockedContent>
          ) : (
            <S.CommentParagraph>
              {text.split('\n').map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </S.CommentParagraph>
          )}

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
                  if (setReply && textareaRef?.current) {
                    setReply({ isReplyMode: true, parentCommentId: id });
                    textareaRef.current.focus();
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
                  <CommentItem {...item} isReply type={type} deleteComments={deleteComments} />
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
