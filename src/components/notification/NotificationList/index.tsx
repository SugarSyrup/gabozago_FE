import Typography from '@_common/Typography';
import * as S from './style';
import { useEffect } from 'react';

interface Props {
  data: {
    id: number;
    content: string;
    createdAt: string;
    redirectURL: string;
    isRead: boolean;
  }[];
  infiniteRef: React.RefObject<HTMLDivElement>;
}

function calculateDate(itemDate: string) {
  const date = new Date(itemDate);
  const current = new Date();
  const diffMSec = (current.getTime() - date.getTime()) / 1000;
  const diffMin = diffMSec / 60;
  const diffHour = diffMSec / (60 * 60);

  if (diffMSec < 60) {
    return '방금';
  }
  if (diffMin < 60) {
    return `${Math.floor(diffMin)}분 전`;
  }
  if (diffHour < 24) {
    return `${Math.floor(diffHour)}시간 전`;
  }
  return `${date.getMonth() + 1}월 ${date.getDate()}일`;
}

function NotificationList({ data, infiniteRef }: Props) {
  useEffect(() => {}, []);

  return (
    <S.AlertList>
      {data.map((item, index) => (
        <S.AlertItem
          key={`${item.content} ${index}`}
          isOpen={item.isRead}
          onClick={() => {
            window.location.href = `${item.redirectURL}`;
          }}
        >
          <Typography.Title size="md" color="inherit" noOfLine={3}>
            {item.content}
          </Typography.Title>
          <Typography.Label size="md" color="inherit">
            {calculateDate(item.createdAt)}
          </Typography.Label>
        </S.AlertItem>
      ))}
      <S.AlertInfomation ref={infiniteRef}>
        <Typography.Title size="sm" color="inherit">
          최근 30일 이내의 알림만 확인할 수 있어요.
        </Typography.Title>
      </S.AlertInfomation>
    </S.AlertList>
  );
}

export default NotificationList;
