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
  const infiniteObserveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (next === null || next === undefined || next === '') return;
        const scrollHeight = window.scrollY;

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
          setData((prev) => [...prev, ...response.data.results]);
          if (response.data.next !== null) {
            setNext(response.data.next.replace('http', 'https'));
          } else {
            setNext('');
          }

          setTimeout(() => {
            window.scrollTo(0, scrollHeight);
          }, 0);
        });
      }
    });

    if (infiniteObserveRef.current) {
      observer.observe(infiniteObserveRef.current);
    }

    return () => observer.disconnect();
  }, [infiniteObserveRef.current, next]);

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
      setNext(res.data.next.replace('http', 'https'));
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
          <S.AlertInfomation>
            <Typography.Title size="sm" color="inherit">
              최근 30일 이내의 알림만 확인할 수 있어요.
            </Typography.Title>
          </S.AlertInfomation>
        </>
      )}
      <div ref={infiniteObserveRef} />
    </PageTemplate>
  );
}

export default NotificationPage;
