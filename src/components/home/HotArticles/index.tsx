import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { get, post } from '@_utils/api';
import Label from '../../common/Typography/Label';
import BookMarkIcon from '../../../assets/icons/bookmark.svg?react';
import BookMarkFilledIcon from '@_icons/bookmark_filled.svg?react';
import useScrapModal from '../../video/useScrapModal';

import * as S from './style';
import Typography from '@_common/Typography';

interface TArticle {
  next: null | string;
  previous: null | string;
  results: {
    id: number;
    title: string;
    thumbnailURL: string;
    subtitle: string;
    isBookmarked: boolean;
  }[];
}

function HotArticles() {
  const navigate = useNavigate();
  const [articleData, setArticleData] = useState<TArticle['results']>([]);
  const [currentArticleId, setCurrentArticleId] = useState<number>(0);
  const [currentArticleIdx, setCurrentArticleIdx] = useState<number>(0);
  const [isUserScrapedList, setIsUserScrapedList] = useState<boolean[]>([]);
  const { ScrapModal, scrapModalOpen } = useScrapModal({
    id: currentArticleId,
    type: 'article',
    setIsScraped: () => {
      setIsUserScrapedList((prev) => {
        prev[currentArticleIdx] = !prev[currentArticleIdx];
        return [...prev];
      });
    },
  });

  useEffect(() => {
    // @TODO: API 가 현재 존재하지 않아 임시로 기존 APi 활용 -> 수정 예정
    get<TArticle>('/community/article?ordering=weekly_popular&size=10').then((response) => {
      setArticleData(response.data.results);
      response.data.results.forEach((article) => {
        setIsUserScrapedList((prev) => [...prev, article.isBookmarked]);
      });
    });
  }, []);

  return (
    <>
      <ScrapModal />
      <S.Slider>
        {articleData?.slice(6, articleData.length).map((article, idx) => (
          <S.SliderItem key={article.id}>
            <S.SliderItemIdx>
              <Typography.Title size="md" color="inherit">
                {idx}
              </Typography.Title>
            </S.SliderItemIdx>
            <S.SliderImg
              src={article.thumbnailURL}
              onClick={() => {
                navigate(`/article/${article.id}`);
              }}
            />
            <div
              onClick={() => {
                navigate(`/article/${article.id}`);
              }}
            >
              <Label size="lg" noOfLine={2}>
                {article.title}
              </Label>
            </div>
            <S.BookMarkWrapper
              isBookmark={isUserScrapedList[idx + 5]}
              onClick={() => {
                setCurrentArticleIdx(idx + 5);
                if (localStorage.getItem('access_token')) {
                  if (!article.isBookmarked) {
                    post<{ message: 'Create Success' | 'Delete Success' }>(
                      '/folder/scrap/community',
                      {
                        community: 'article',
                        postId: article.id,
                      },
                    ).then(() => {});
                  }
                  setIsUserScrapedList((prev) => {
                    prev[idx + 5] = true;
                    return [...prev];
                  });
                  setCurrentArticleId(article.id);
                  scrapModalOpen();
                }
              }}
            >
              {isUserScrapedList[idx + 5] ? <BookMarkFilledIcon /> : <BookMarkIcon />}
            </S.BookMarkWrapper>
          </S.SliderItem>
        ))}
      </S.Slider>
    </>
  );
}

export default HotArticles;
