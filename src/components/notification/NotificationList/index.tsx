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
            {item.createdAt}
          </Typography.Label>
        </S.AlertItem>
      ))}
      <S.AlertInfomation>
        <Typography.Title size="sm" color="inherit">
          최근 30일 이내의 알림만 확인할 수 있어요.
        </Typography.Title>
      </S.AlertInfomation>
    </S.AlertList>
  );
}

export default NotificationList;
