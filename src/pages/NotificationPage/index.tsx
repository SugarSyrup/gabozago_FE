import { useEffect, useState } from 'react';

import { HeaderWithBack } from '@_common/Header';
import PageTemplate from '@_common/PageTemplate';
import Typography from '@_common/Typography';
// import { get } from '@_utils/api';

import NotificationList from '../../components/notification/NotificationList';
import * as S from './style';

function NotificationPage() {
  const [data] = useState<[]>([]);

  useEffect(() => {
    // Alert DATA GET
    // get().then((res) => {});
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
        <NotificationList data={data} />
      )}
    </PageTemplate>
  );
}

export default NotificationPage;
