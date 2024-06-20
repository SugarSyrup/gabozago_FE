import { useNavigate } from 'react-router-dom';
import * as S from './style';
import Typography from '../../common/Typography';
import imageIcon from '../../../assets/icons/image.svg';
import ClapIcon from '../../../assets/icons/clap_gray_secondary.svg?react';
import CommentIcon from '../../../assets/icons/comment.svg?react';
import BookMarkIcon from '../../../assets/icons/bookmark_black.svg?react';

interface Props {
  id: number;
  title: string;
  subtitle: string;
  thumbnailURL: string;
  claps: number;
  comment: number;
  bookmark: number;
}

function ScrapedArticle({ id, title, subtitle, thumbnailURL, claps, comment, bookmark }: Props) {
  const navigate = useNavigate();

  return (
    <S.ArticleContainer
      onClick={() => {
        navigate(`/article/${id}`);
      }}
    >
      <S.InfoContainer>
        <div>
          <Typography.Title size="md" noOfLine={2}>
            {title}
          </Typography.Title>
          <Typography.Body size="md" noOfLine={2} color="#A6A6A6">
            {subtitle}
          </Typography.Body>
        </div>
        <S.BottomInfoContainer>
          <span>
            <ClapIcon /> {claps}
          </span>
          <span>
            <CommentIcon /> {comment}
          </span>
          <span>
            <BookMarkIcon /> {bookmark}
          </span>
        </S.BottomInfoContainer>
      </S.InfoContainer>
      {thumbnailURL || thumbnailURL !== '' ? (
        <S.ThumbnailImage src={thumbnailURL} alt="" />
      ) : (
        <S.ThumbnailImagePlaceHolder src={imageIcon} alt="이미지 불러오기에 실패했습니다." />
      )}
    </S.ArticleContainer>
  );
}

export default ScrapedArticle;
