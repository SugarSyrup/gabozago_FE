import { useEffect, useRef, useState } from 'react';

import { HeaderWithBack } from '@_common/Header';
import PageTemplate from '@_common/PageTemplate';
import Typography from '@_common/Typography';
// import { get } from '@_utils/api';

import NotificationList from '../../components/notification/NotificationList';
import * as S from './style';
import { get } from '@_utils/api';

function NotificationPage() {
  const [data, setData] = useState<
    {
      id: number;
      content: string;
      createdAt: string;
      redirectURL: string;
      isRead: boolean;
    }[]
  >([]);
  const [next, setNext] = useState<string>();
  const infiniteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && next) {
        get<{
          next: string;
          previous: string;
          results: {
            id: number;
            content: string;
            createdAt: string;
            redirectURL: string;
            isRead: boolean;
          }[];
        }>(next).then((response) => {
          setData([...data, ...response.data.results]);
          setNext(response.data.next);
        });
      }
    }, options);

    if (infiniteRef.current) {
      observer.observe(infiniteRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    get<{
      next: string;
      previous: string;
      results: {
        id: number;
        content: string;
        createdAt: string;
        redirectURL: string;
        isRead: boolean;
      }[];
    }>('/user/web-notification').then((res) => {
      setData(res.data.results);
      setNext(response.data.next);
    });
  }, []);

  return (
    <PageTemplate header={<HeaderWithBack>알림</HeaderWithBack>}>
      {data.length === 0 ? (
        <S.NoDataContainer>
          <img src="/imgs/NoAlertAngSim.png" alt="데이터 없음" />
          <Typography.Title size="lg" color="inherit">
            최근 받은 알림이 없어요
          </Typography.Title>
        </S.NoDataContainer>
      ) : (
        <>
          <NotificationList data={data} />
          <div ref={infiniteRef} />
        </>
      )}
    </PageTemplate>
  );
}

export default NotificationPage;
