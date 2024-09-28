import { useEffect, useRef, useState } from 'react';

import * as S from './style';

import UserActivityFilter from '../UserActivityFilter';
import UserClapsPostList from '../UserClapsPostList';
import UserCommentsList from '../UserCommentsList';

import { get, post } from '@_utils/api';

export interface ArticleResponseType {
  next: string | null;
  previous: string | null;
  results: {
    id: number;
    title: string;
    nickname: string;
    avatarURL: string;
    thumbnailURL: string;
    clapCount: number;
    commentCount: number;
  }[];
}

export interface CommentsResponseType {
  next: string | null;
  previous: string | null;
  results: {
    id: number;
    comment: string;
    title: string;
  }[];
}

function UserActivity() {
  const [actFilter, setActFilter] = useState<'clap' | 'comment'>('clap');
  const [next, setNext] = useState<string | null>(null);
  const [data, setData] = useState<
    ArticleResponseType['results'] | CommentsResponseType['results']
  >([]);

  const dataContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (actFilter === 'clap') {
      get<ArticleResponseType>(
        `/user/profile/my-activity?sort=${actFilter}&community=article`,
      ).then((response) => {
        setData(response.data.results);
        setNext(response.data.next?.replace('http://', 'https://'));
      });
    } else {
      get<CommentsResponseType>(
        `/user/profile/my-activity?sort=${actFilter}&community=article`,
      ).then((response) => {
        setData(response.data.results);
        setNext(response.data.next?.replace('http://', 'https://'));
      });
    }
  }, [actFilter]);

  useEffect(() => {
    let observer = new IntersectionObserver(() => {});

    if (dataContainerRef.current) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && next) {
          if (actFilter === 'clap') {
            get<ArticleResponseType>(next).then((response) => {
              setData((prev) => {
                const prevData = prev as ArticleResponseType['results'];
                return [...prevData, ...response.data.results];
              });
              setNext(response.data.next?.replace('http://', 'https://'));
            });
          } else {
            get<CommentsResponseType>(next).then((response) => {
              setData((prev) => {
                const prevData = prev as CommentsResponseType['results'];
                return [...prevData, ...response.data.results];
              });
              setNext(response.data.next?.replace('http://', 'https://'));
            });
          }
        }
      });

      observer.observe(dataContainerRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [next, dataContainerRef]);

  return (
    <S.Container>
      <UserActivityFilter setActFilter={setActFilter} actFilter={actFilter} />
      {data !== undefined && actFilter === 'clap' ? (
        <UserClapsPostList data={data as ArticleResponseType['results']} type="article" />
      ) : (
        <UserCommentsList data={data as CommentsResponseType['results']} type="article" />
      )}

      <div ref={dataContainerRef} />
    </S.Container>
  );
}

export default UserActivity;
