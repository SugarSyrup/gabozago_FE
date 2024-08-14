import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import PageTemplate from '../../../components/common/PageTemplate';
import { HeaderWithBack } from '../../../components/common/Header';
import Typography from '../../../components/common/Typography';
import { get } from '@_utils/api';

import * as S from './style';

interface TData {
  id: number;
  title: string;
  createdAt: string;
  status: '답변대기' | '답변완료';
  content: string;
  imageURL: string[];

  answer: {
    title: string;
    createdAt: string;
    content: string;
  } | null;
}

function InquiryDetailPage() {
  const { id } = useParams();
  const [data, setData] = useState<TData>();

  useEffect(() => {
    get<TData>(`/settings/support/help/ask/${id}`).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <PageTemplate nav={false} header={<HeaderWithBack>내 문의 내역</HeaderWithBack>}>
      <S.Container>
        <S.InfoContainer>
          <S.TextContainer>
            <Typography.Title size="md" noOfLine={3}>
              {data?.title}
            </Typography.Title>
            <S.DateSpan>{data?.createdAt.replace('-', '. ').replace('-', '. ')}</S.DateSpan>
          </S.TextContainer>
          <S.StatusSpan type={data?.status === '답변대기' ? 'active' : 'inactive'}>
            {data?.status || '답변대기'}
          </S.StatusSpan>
        </S.InfoContainer>
        <S.Contents>
          <Typography.Body size="md" noOfLine={100}>
            {data?.content}
          </Typography.Body>
        </S.Contents>
        {data?.imageURL.length !== 0 && (
          <S.ImgContainer>
            <Typography.Title size="md">첨부파일</Typography.Title>
            <S.ImgList>
              {data?.imageURL.map((url, index) => <img src={url} alt="img" key={index} />)}
            </S.ImgList>
          </S.ImgContainer>
        )}
        {data?.answer && (
          <>
            <S.AnswerInfoContainer>
              <S.TextContainer>
                <Typography.Title size="md">{data?.answer?.title}</Typography.Title>
                <S.DateSpan>
                  {data?.answer?.createdAt.replace('-', '. ').replace('-', '. ')}
                </S.DateSpan>
              </S.TextContainer>
            </S.AnswerInfoContainer>
            <S.Contents>
              <Typography.Body size="md" noOfLine={100}>
                {data?.answer?.content.split('\n').map((line) => <p>{line}</p>)}
              </Typography.Body>
            </S.Contents>
          </>
        )}
      </S.Container>
    </PageTemplate>
  );
}

export default InquiryDetailPage;
