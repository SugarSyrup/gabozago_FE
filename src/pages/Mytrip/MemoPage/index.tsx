import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import * as S from './style';
import PageTemplate from '../../../components/common/PageTemplate';
import Button from '../../../components/common/Button';
import { patch } from '@_utils/api';
import Typography from '../../../components/common/Typography';
import BackButton from '@_common/BackButton';

function MemoPage() {
  const navigate = useNavigate();
  const [query] = useSearchParams();
  const [text, setText] = useState<string>(query.get('text') || '');
  const detailRouteId = Number(query.get('detailRouteId'));

  const saveMemo = (detailRouteId: number, text: string) => {
    try {
      patch('/my-travel/detail-route/memo', {
        id: detailRouteId,
        memo: text,
      }).then(() => {
        navigate(-1);
      });
    } catch (error) {
      alert('메모 저장에 실패했습니다.');
    }
  };

  return (
    <PageTemplate
      nav={<></>}
      header={
        <S.Header>
          <BackButton />
          <S.PlaceInfoContainer>
            <Typography.Headline size="sm">
              {query.get('placeName') || '장소명'}
            </Typography.Headline>
            <S.PlaceInfoBottomBox>
              <Typography.Title size="md">Day {query.get('day') || '-1'}</Typography.Title>
              <Typography.Title size="md" color="#A6A6A6">
                {query.get('date') || 'MM.DD(DoW)'}
              </Typography.Title>
            </S.PlaceInfoBottomBox>
          </S.PlaceInfoContainer>
        </S.Header>
      }
    >
      <S.MemoTextArea
        placeholder="메모를 입력해 주세요."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        maxLength={1000}
      />
      <S.TextCountParagraph>
        {text.length}
        /1000
      </S.TextCountParagraph>
      <S.ButtonWrapper>
        <Button
          type="normal"
          width="100%"
          active
          size="lg"
          onClick={() => {
            saveMemo(detailRouteId, text);
          }}
        >
          <Typography.Title size="lg" color="inherit">
            저장
          </Typography.Title>
        </Button>
      </S.ButtonWrapper>
    </PageTemplate>
  );
}

export default MemoPage;
