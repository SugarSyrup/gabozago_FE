import Typography from '@_common/Typography';
import * as S from './style';

interface Props {
  data: {
    id: number;
    content: string;
    createdAt: string;
    redirectURL: string;
    isRead: boolean;
  }[];
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

function NotificationList({ data }: Props) {
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
    </S.AlertList>
  );
}

export default NotificationList;
