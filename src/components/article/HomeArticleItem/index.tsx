import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import BookMarkIcon from '../../../assets/icons/bookmark.svg?react';
import BookMarkFilledIcon from '../../../assets/icons/bookmark_filled.svg?react';
import Typography from '../../common/Typography';

import * as S from './style';
import useScrapModal from '../../video/useScrapModal';
import { post } from '@_utils/api';

interface Props {
  id: number;
  title: string;
  desc: string;
  thumbnailURL: string;
  isBookmarked: boolean;
}

function ArticleItem({ id, title, desc, thumbnailURL, isBookmarked }: Props) {
  const navigate = useNavigate();
  const ContainerRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0.3);
  const [isUserScraped, setIsUserScraped] = useState<boolean>(isBookmarked);
  const { ScrapModal, scrapModalOpen, scrapModalClose } = useScrapModal({
    id: Number(id),
    type: 'article',
    setIsScraped: () => {
      setIsUserScraped((prev) => !prev);
    },
  });

  useEffect(() => {
    if (!ContainerRef.current) return;

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          const entryIntersectionRatio = Math.floor(entry.intersectionRatio * 100) / 100;
          if (entryIntersectionRatio >= 0.85) {
            setOpacity(1);
          } else if (entryIntersectionRatio <= 0.35) {
            setOpacity(0.3);
          } else {
            setOpacity(entryIntersectionRatio);
          }
        });
      },
      {
        threshold: [
          0.3, 0.325, 0.35, 0.375, 0.4, 0.425, 0.45, 0.475, 0.5, 0.525, 0.55, 0.575, 0.6, 0.625,
          0.65, 0.675, 0.7, 0.725, 0.75, 0.775, 0.8, 0.825, 0.85, 0.875, 0.9,
        ],
      },
    );
    observer.observe(ContainerRef.current);
  }, []);

  return (
    <>
      <ScrapModal />
      <S.ArticleItem opacity={opacity} ref={ContainerRef}>
        <S.ThumbnailWrapper>
          <S.Thumbnail
            src={thumbnailURL}
            onClick={() => {
              navigate(`/article/${id}`);
            }}
          />
          <S.BookMarkWrapper
            isBookmark={isUserScraped}
            onClick={() => {
              if (localStorage.getItem('access_token')) {
                if (!isUserScraped) {
                  post<{ message: 'Create Success' | 'Delete Success' }>(
                    '/folder/scrap/community',
                    {
                      community: 'article',
                      postId: id,
                    },
                  ).then(() => {
                    setIsUserScraped(true);
                  });
                }

                setIsUserScraped(true);
                scrapModalOpen();
              }
            }}
          >
            {isUserScraped ? <BookMarkFilledIcon /> : <BookMarkIcon />}
          </S.BookMarkWrapper>
        </S.ThumbnailWrapper>
        <div
          onClick={() => {
            navigate(`/article/${id}`);
          }}
        >
          <Typography.Headline size="sm" noOfLine={2}>
            <span style={{ wordBreak: 'break-all' }}>{title}</span>
          </Typography.Headline>
          <Typography.Title size="md" color="#A6A6A6">
            {desc}
          </Typography.Title>
        </div>
        <Typography.Title size="sm" color="#5276FA">
          by. 가보자고
        </Typography.Title>
      </S.ArticleItem>
    </>
  );
}

export default ArticleItem;
