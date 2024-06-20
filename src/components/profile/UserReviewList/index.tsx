import * as S from './style';

import ClapIcon from '../../../assets/icons/clap.svg?react';
import CommentIcon from '../../../assets/icons/comment.svg?react';
import { userReviewType } from '../../../assets/data/userpageData';

interface Props {
  data: userReviewType[];
}

function UserReviewList({ data }: Props) {
  return (
    <S.List>
      {data.map(({ title, type, claps, comments, thumbnailURL }) => (
        <S.Item>
          <S.TextContainer>
            <S.Name>{title}</S.Name>
            <S.Desc>
              <span>
                <ClapIcon /> {claps}
              </span>
              <span>
                <CommentIcon /> {comments}
              </span>
            </S.Desc>
          </S.TextContainer>
          <S.ThumbnailWrapper>
            {thumbnailURL && <img src={thumbnailURL} alt={title} />}
          </S.ThumbnailWrapper>
        </S.Item>
      ))}
    </S.List>
  );
}

export default UserReviewList;
