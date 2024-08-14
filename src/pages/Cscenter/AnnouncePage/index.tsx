import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import PageTemplate from '../../../components/common/PageTemplate';
import { HeaderWithBack } from '../../../components/common/Header';
import Typography from '../../../components/common/Typography';
import { get } from '@_utils/api';

import * as S from './style';

interface TData {
  id: number;
  title: string;
  createdAt: string;
}

function AnnouncePage() {
  const [data, setData] = useState<TData[]>([]);

  useEffect(() => {
    get<{
      next: string;
      previous: string;
      results: TData[];
    }>('/settings/support/announcement').then(({ data: responseData }) => {
      setData(responseData.results);
    });
  }, []);

  return (
    <PageTemplate header={<HeaderWithBack>공지사항</HeaderWithBack>}>
      <S.Container>
        <S.OrderedList>
          {data.map(({ id, title, createdAt }, index) => (
            <S.ListItem key={`${title} ${index}`}>
              <Link to={`./${id}`}>
                <p className="title">
                  <Typography.Title size="md" color="inherit">
                    {title}
                  </Typography.Title>
                </p>
                <p className="date">
                  <Typography.Label size="lg" color="inherit">
                    {createdAt.replace('-', '. ').replace('-', '. ')}
                  </Typography.Label>
                </p>
              </Link>
            </S.ListItem>
          ))}
        </S.OrderedList>
      </S.Container>
    </PageTemplate>
  );
}

export default AnnouncePage;
