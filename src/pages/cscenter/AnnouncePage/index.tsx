import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import PageTemplate from '../../../components/common/PageTemplate';
import PageHeader from '../../../components/common/PageHeader';
import Typography from '../../../components/common/Typography';
import { get } from '../../../utils/api';

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
    }>('/settings/support/announcement').then(({ data }) => setData(data.results));
  }, []);

  return (
    <PageTemplate
      header={
        <PageHeader>
          <Typography.Title size="lg">공지사항</Typography.Title>
        </PageHeader>
      }
    >
      <S.Container>
        <S.OrderedList>
          {data.map(({ id, title, createdAt }) => (
            <S.ListItem>
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
