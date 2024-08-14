import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PageTemplate from '../../../components/common/PageTemplate';
import { HeaderWithBack } from '../../../components/common/Header';
import Typography from '../../../components/common/Typography';
import { get } from '@_utils/api';

import * as S from './style';

interface TData {
  title: string;
  category: string;
  createdAt: string;
  content: string;
}

function FAQDetailPage() {
  const { id } = useParams();
  const [data, setData] = useState<TData>({
    title: '-',
    category: '-',
    createdAt: '0000-00-00',
    content: '-',
  });

  useEffect(() => {
    get<TData>(`/settings/support/help/faq/${id}`).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <PageTemplate nav={false} header={<HeaderWithBack>고객센터 • 도움말</HeaderWithBack>}>
      <S.Container>
        <S.InfoContainer>
          <p className="title">
            <Typography.Title size="md" color="inherit">
              {data.title}
            </Typography.Title>
          </p>
          <p className="date">
            <Typography.Label size="lg" color="inherit">
              {data.category}
            </Typography.Label>
          </p>
        </S.InfoContainer>
        <S.ContentsContainer>
          {data.content.split('\n').map((line, index) => (
            <p key={`${line} ${index}`}>{line}</p>
          ))}
        </S.ContentsContainer>
      </S.Container>
    </PageTemplate>
  );
}

export default FAQDetailPage;
