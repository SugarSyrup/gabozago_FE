import React, { useEffect, useState } from 'react';

import PageTemplate from '@_common/PageTemplate';
import { get } from '@_utils/api';

import ArticleItem from '../../../components/article/HomeArticleItem';

import * as S from './style';

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

function ArticlesPage() {
  const [articleData, setArticleData] = useState<TArticle['results']>([]);
  const [next, setNext] = useState<TArticle['next']>(null);
  const infiniteRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    get<TArticle>('/community/article?ordering=latest').then((response) => {
      setArticleData(response.data.results);
      setNext(response.data.next?.replace('http', 'https'));
    });
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && next) {
          const scrollHeight = window.scrollY;
          get<TArticle>(next).then((response) => {
            setArticleData((prev) => [...prev, ...response.data.results]);
            setNext(response.data.next?.replace('http://', 'https://'));

            setTimeout(() => {
              window.scrollTo(0, scrollHeight);
            }, 10);
          });
        }
      });
    }, options);

    if (infiniteRef.current) {
      observer.observe(infiniteRef.current);
    }

    return () => observer.disconnect();
  });

  return (
    <PageTemplate>
      <div style={{ paddingTop: '20px' }} />
      <S.Container ref={containerRef}>
        <S.ArticleList>
          {articleData.map((article) => (
            <ArticleItem
              key={article.id}
              id={article.id}
              title={article.title}
              desc={article.subtitle}
              thumbnailURL={article.thumbnailURL}
              isBookmarked={article.isBookmarked}
            />
          ))}
          <div ref={infiniteRef} />
        </S.ArticleList>
      </S.Container>
    </PageTemplate>
  );
}

export default ArticlesPage;
