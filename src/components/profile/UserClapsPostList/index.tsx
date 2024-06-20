import { Link } from 'react-router-dom';

import ClapIcon from '../../../assets/icons/clap_gray_secondary.svg?react';
import CommentIcon from '../../../assets/icons/comment.svg?react';
import UserIcon from '../../../assets/icons/user.svg?react';
import ImgIcon from '../../../assets/icons/image.svg?react';
import Typography from '../../common/Typography';

import { articleResponseType, shortsResponseType } from '../UserActivity';
import * as S from './style';

interface Props {
  data: articleResponseType['results'] | shortsResponseType['results'] | undefined;
  type: 'short-form' | 'article';
}

function UserClapsPostList({ data, type }: Props) {
  return (
    <S.List>
      {type === 'article'
        ? (data as articleResponseType['results']).map(
            ({ id, title, nickname, avatarURL, thumbnailURL, clapCount, commentCount }) => (
              <S.Item>
                <S.ThumbnailWrapper>
                  {thumbnailURL ? <img src={thumbnailURL} alt={title} /> : <ImgIcon />}
                </S.ThumbnailWrapper>
                <S.TextContainer>
                  <Link to={`/article/${id}`} style={{ textDecoration: 'none' }}>
                    <Typography.Title size="md" noOfLine={3}>
                      {title}
                    </Typography.Title>
                  </Link>
                  <S.User>
                    {avatarURL ? <img src={avatarURL} alt={nickname} /> : <UserIcon />}
                    <Typography.Label size="md" color="inherit">
                      {nickname}
                    </Typography.Label>
                  </S.User>
                  <S.Info>
                    <span>
                      <ClapIcon />
                      <Typography.Label size="md">{clapCount}개</Typography.Label>
                    </span>
                    <span>
                      <CommentIcon />
                      <Typography.Label size="md">{commentCount}개</Typography.Label>
                    </span>
                  </S.Info>
                </S.TextContainer>
              </S.Item>
            ),
          )
        : (data as shortsResponseType['results']).map(
            ({ id, title, nickname, avatarURL, videoId, clapCount, commentCount }) => (
              <S.Item>
                <S.ThumbnailWrapper>
                  {videoId ? (
                    <img src={`http://img.youtube.com/vi/${videoId}/oar2.jpg`} alt={title} />
                  ) : (
                    <ImgIcon />
                  )}
                </S.ThumbnailWrapper>
                <S.TextContainer>
                  <Link to={`/journal/shortform/${id}`} style={{ textDecoration: 'none' }}>
                    <Typography.Title size="md" noOfLine={3}>
                      {title}
                    </Typography.Title>
                  </Link>
                  <S.User>
                    {avatarURL ? <img src={avatarURL} alt={nickname} /> : <UserIcon />}
                    <Typography.Label size="md" color="inherit">
                      {nickname}
                    </Typography.Label>
                  </S.User>
                  <S.Info>
                    <span>
                      <ClapIcon />
                      <Typography.Label size="md">{clapCount}개</Typography.Label>
                    </span>
                    <span>
                      <CommentIcon />
                      <Typography.Label size="md">{commentCount}개</Typography.Label>
                    </span>
                  </S.Info>
                </S.TextContainer>
              </S.Item>
            ),
          )}
    </S.List>
  );
}

export default UserClapsPostList;
