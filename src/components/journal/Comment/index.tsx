import { FormEventHandler, useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import * as S from './style';
import Heading from '../../common/Heading';
import SendIcon from '../../../assets/icons/send.svg?react';
import UserIcon from '../../../assets/icons/user.svg?react';
import CommentItem, { Comment as TComment } from '../CommentItem';
import { deletes, get, post } from '@_utils/api';

interface TParsedComment extends TComment {
  replys: TComment[];
}

interface Props {
  id: number;
  commentInputPosition?: 'bottom' | 'top';
  type: 'short-form' | 'article' | 'video' | 'report' | 'travelog';
  commentCount: number;
  setContentsCommentCount: React.Dispatch<React.SetStateAction<number>>;
}

function Comment({
  id,
  commentInputPosition = 'top',
  type,
  commentCount: commentCountProp,
  setContentsCommentCount,
}: Props) {
  const profileImage = useLoaderData() as string;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [reply, setReply] = useState<{
    isReplyMode: boolean;
    parentCommentId: number | null;
  }>({
    isReplyMode: false,
    parentCommentId: null,
  });
  const [comment, setComment] = useState<string>('');
  const [commentCount, setCommentCount] = useState<number>(commentCountProp);
  const [comments, setComments] = useState<TParsedComment[]>([]);
  const [isSubmitActive, setIsSubmitActive] = useState<boolean>(false);

  const parseComments = (comments: TComment[]): TParsedComment[] => {
    const parsedComments: TParsedComment[] = [];
    const commentMap: { [key: number]: TParsedComment } = {};

    // 1. 모든 댓글을 순회하며 commentMap에 저장
    comments.forEach((comment) => {
      const parsedComment: TParsedComment = {
        ...comment,
        replys: [],
      };
      commentMap[comment.id] = parsedComment;
      parsedComments.push(parsedComment);
    });

    // 2. 모든 댓글을 다시 순회하며 대댓글 관계 설정
    parsedComments.forEach((comment) => {
      if (comment.parentCommentId !== null) {
        const parentComment = commentMap[comment.parentCommentId];
        if (parentComment && parentComment.id !== comment.id) {
          parentComment.replys.push(comment);
        }
      }
    });

    // 3. 배열에서 parentCommentId 있는 댓글 제거
    return parsedComments.filter(({ parentCommentId }) => parentCommentId === null);
  };

  const getComments = async (id: number) => {
    const { data } = await get<TComment[]>(`community/${type}/${id}/comment`);
    setCommentCount(data.length);
    setContentsCommentCount(data.length);
    setComments(parseComments(data));
  };
  const deleteComments = async (commentId: number) => {
    deletes(`community/${type}/comment`, { commentId }).then(() => {
      getComments(id);
    });
  };

  const submitComment = async (parentCommentId: number | null) => {
    if (type === 'short-form') {
      await post<{
        shortformId: number;
        parentCommentId: number | null;
        content: string;
      }>(`/community/${type}/comment`, {
        shortformId: id,
        parentCommentId,
        content: comment,
      });
    } else if (type === 'article') {
      await post<{
        articleId: number;
        parentCommentId: number | null;
        content: string;
      }>(`/community/${type}/comment`, {
        articleId: id,
        parentCommentId,
        content: comment,
      });
    }

    getComments(id);
    setComment('');
  };
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = '1px';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const onChange: FormEventHandler<HTMLTextAreaElement> = (e) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const inputValue = (e.target as HTMLTextAreaElement).value;

    setComment(inputValue);
    adjustTextareaHeight();

    if (inputValue.length > 0) {
      setIsSubmitActive(true);
    } else {
      setIsSubmitActive(false);
    }
  };

  useEffect(() => {
    getComments(id);
  }, []);

  return (
    <>
      <S.Header position={commentInputPosition}>
        <Heading size="sm">
          댓글 <S.CommentCountSpan>{commentCount}</S.CommentCountSpan>
        </Heading>
      </S.Header>
      <S.CommentInputForm
        position={commentInputPosition}
        onSubmit={(e) => {
          e.preventDefault();
          submitComment(reply.isReplyMode ? reply.parentCommentId : null);
        }}
      >
        <S.UserProfileImgBox>
          {profileImage ? <S.UserProfileImg src={profileImage} /> : <UserIcon />}
        </S.UserProfileImgBox>
        <S.CommentInputControlBox>
          <S.CommentTextArea
            placeholder="댓글 달기..."
            maxLength={1500}
            value={comment}
            ref={textareaRef}
            onChange={onChange}
          />
          <S.SendButton disabled={!isSubmitActive} type="submit">
            <SendIcon />
          </S.SendButton>
        </S.CommentInputControlBox>
      </S.CommentInputForm>
      <S.Contents
        position={commentInputPosition}
        onClick={() => {
          if (reply.isReplyMode) {
            setReply({ isReplyMode: false, parentCommentId: null });
          }
        }}
      >
        {comments && comments.length !== 0 ? (
          <S.CommentList>
            {comments.map((item) => (
              <li key={`comment-shortform-${item.id}`}>
                <CommentItem
                  {...item}
                  textareaRef={textareaRef}
                  reply={reply}
                  setReply={setReply}
                  type={type}
                  deleteComments={deleteComments}
                  getComments={() => {
                    getComments(id);
                  }}
                />
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
