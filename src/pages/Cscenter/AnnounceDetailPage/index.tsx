import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { get } from '@_utils/api';
import Typography from '../../../components/common/Typography';
import PageTemplate from '../../../components/common/PageTemplate';
import { HeaderWithBack } from '../../../components/common/Header';

import * as S from './style';

interface TData {
  title: string;
  createdAt: string;
  content: string;
}

function AnnounceDetailPage() {
  const { id } = useParams();
  const [data, setData] = useState<TData>({
    title: '',
    createdAt: '',
    content: '',
  });

  useEffect(() => {
    get<TData>(`/settings/support/announcement/${id}`).then(({ data: responseData }) =>
      setData(responseData),
    );
  }, []);

  return (
    <PageTemplate nav={false} header={<HeaderWithBack>공지사항</HeaderWithBack>}>
      <S.Container>
        <S.InfoContainer>
          <p className="title">
            <Typography.Title size="md" color="inherit">
              {data.title}
            </Typography.Title>
          </p>
          <p className="date">
            <Typography.Label size="lg" color="inherit">
              {data.createdAt.replace('-', '. ').replace('-', '. ')}
            </Typography.Label>
          </p>
        </S.InfoContainer>
        <S.ContentsContainer>
          <Typography.Body size="md" color="inherit" noOfLine={1000}>
            {data.content.split('\n').map((line, index) => (
              <p key={`${line} ${index}`}>{line}</p>
            ))}
          </Typography.Body>
        </S.ContentsContainer>
      </S.Container>
    </PageTemplate>
  );
}

export default AnnounceDetailPage;
