import Typography from '@_common/Typography';
import * as S from './style';

interface Props {
  data: {
    name: string;
    time: string;
    relatedURL: {
      type: 'place' | 'content';
      id: string;
    };
    isRead: boolean;
  }[];
}

// @TODO: 컴포넌트 누르면 isRead 세팅하기
// @TODO: 컴포넌트 누르면 해당 페이지로 이동하게끔

function NotificationList({ data }: Props) {
  return (
    <S.AlertList>
      {data.map((item, index) => (
        <S.AlertItem key={`${item.name} ${index}`} isOpen={item.isRead}>
          <Typography.Title size="md" color="inherit">
            {item.name}
          </Typography.Title>
          <Typography.Label size="md" color="inherit">
            {item.time}
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
