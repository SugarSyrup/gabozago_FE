import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import * as S from './style';
import ClapIcon from '../../../assets/icons/clap_blue.svg?react';
import BookMarkIcon from '../../../assets/icons/bookmark_black.svg?react';
import CommentIcon from '../../../assets/icons/comment.svg?react';
import RightChevronIcon from '../../../assets/icons/chevron_right.svg?react';
import LogoIcon from '../../../assets/icons/logo_small.svg?react';
import LocationIcon from '../../../assets/icons/location.svg?react';
import Typography from '../../common/Typography';

interface Props {
  type: 'short-form' | 'article';
  id: number;
  videoId?: string;
  thumbnailURL?: string;
  name: string;
  location: string[];
  hearts: number;
  comments: number;
  scraps: number;
}

function RecommendationReviewItem({
  type,
  id,
  name,
  location,
  hearts,
  comments,
  scraps,
  thumbnailURL,
  videoId,
}: Props) {
  const navigate = useNavigate();

  return (
    <S.Container
      onClick={() => {
        if (type === 'article') {
          navigate(`/article/${id}`);
        } else {
          navigate(`/journal/shortform/${id}`);
        }
      }}
    >
      <S.Thumbnail>
        {thumbnailURL ? (
          <img
            src={
              type === 'short-form'
                ? `https://i.ytimg.com/vi/${videoId}/oardefault.jpg`
                : thumbnailURL
            }
          />
        ) : (
          <LogoIcon />
        )}
      </S.Thumbnail>
      <S.Infomation>
        <Typography.Title size="sm">{name}</Typography.Title>
        <S.Desc>
          <S.DescItem>
            <S.SVGGrayColorWrapper>
              <LocationIcon />
            </S.SVGGrayColorWrapper>
            <Typography.Label size="md" color="#A6A6A6">
              {location}
            </Typography.Label>
          </S.DescItem>
          <S.DescItem>
            <ClapIcon />
            <Typography.Label size="md">{hearts}</Typography.Label>
          </S.DescItem>
          <S.DescItem>
            <S.SVGMainColorWrapper>
              <CommentIcon />
            </S.SVGMainColorWrapper>
            <Typography.Label size="md">{comments}</Typography.Label>
          </S.DescItem>
          <S.DescItem>
            <S.SVGMainColorWrapper>
              <BookMarkIcon />
            </S.SVGMainColorWrapper>
            <Typography.Label size="md">{scraps}</Typography.Label>
          </S.DescItem>
        </S.Desc>
      </S.Infomation>
      <S.LinkIcon>
        <RightChevronIcon />
      </S.LinkIcon>
    </S.Container>
  );
}

export default RecommendationReviewItem;
