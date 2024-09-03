import { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { HeaderWithBack } from '@_common/Header';
import PageTemplate from '@_common/PageTemplate';
import Typography from '@_common/Typography';
import { patch } from '@_utils/api';

import * as S from './style';

// @TODO : Memo Data 가져오는 로직 추가
function ContentMemoEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [textLength, setTextLength] = useState(0);
  const memoRef = useRef<HTMLTextAreaElement>(null);

  return (
    <PageTemplate
      header={
        <HeaderWithBack>
          <span />
        </HeaderWithBack>
      }
      nav={
        <S.ButtonWrapper>
          <S.Button
            onClick={() => {
              patch(`/scrap/content/${id}`, {
                memo: memoRef.current?.value,
              }).then(() => {
                navigate(0);
              });
            }}
          >
            <Typography.Title size="lg" color="white">
              저장하기
            </Typography.Title>
          </S.Button>
        </S.ButtonWrapper>
      }
    >
      <S.Container>
        <Typography.Headline size="sm" color="inherit">
          메모
        </Typography.Headline>
        <S.Memo
          maxLength={1000}
          onChange={(e) => {
            setTextLength(e.currentTarget.textLength);
          }}
          ref={memoRef}
        />
        <Typography.Body size="lg" color="#898989">
          {textLength}/1000
        </Typography.Body>
      </S.Container>
    </PageTemplate>
  );
}

export default ContentMemoEditPage;
