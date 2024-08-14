import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { get } from '@_utils/api';
import PageTemplate from '../../../components/common/PageTemplate';
import { HeaderWithBack } from '../../../components/common/Header';

import * as S from './style';

interface THistoryList {
  id: string;
  title: string;
  createdAt: string;
  status: '답변대기' | '답변완료';
}

function InquiryHistoryPage() {
  const navigate = useNavigate();
  const [data, setData] = useState<THistoryList[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      get<{
        next: string | null;
        previous: string | null;
        results: THistoryList[];
      }>('/settings/support/help/ask').then(({ data: responseData }) =>
        setData(responseData.results),
      );
    }
  }, []);

  return (
    <PageTemplate nav={false} header={<HeaderWithBack>내 문의 내역</HeaderWithBack>}>
      {data.length === 0 ? (
        <S.NoDataTextContainer>
          <p className="no_data-heading">문의하신 내역이 없습니다.</p>
          <p className="no_data-desc">
            문의 내용은 고객센터/도움말의
            <br />
            서비스 문의하기를
            <br />
            클릭하여 작성해주세요.
          </p>
        </S.NoDataTextContainer>
      ) : (
        <S.List>
          {data.map(({ id, title, createdAt, status }) => (
            <li
              key={id}
              onClick={() => {
                navigate(`/cscenter/inquiry/${id}`);
              }}
            >
              <p>{title}</p>
              <div>
                <S.StatusSpan type={status === '답변대기' ? 'active' : 'inactive'}>
                  {status}
                </S.StatusSpan>
                <S.DateSpan>{createdAt.replace('-', '. ').replace('-', '. ')}</S.DateSpan>
              </div>
            </li>
          ))}
        </S.List>
      )}
    </PageTemplate>
  );
}

export default InquiryHistoryPage;
