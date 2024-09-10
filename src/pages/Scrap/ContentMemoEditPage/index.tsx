import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import toast from 'react-hot-toast';

import { HeaderWithBack } from '@_common/Header';
import PageTemplate from '@_common/PageTemplate';
import Typography from '@_common/Typography';
import { patch } from '@_utils/api';
import { Toast } from '@_common/Toast';
import { popupValue } from '@_recoil/common/PopupValue';
import ImportantIcon from '@_icons/exclamation_circle.svg?react';

import * as S from './style';
import usePopup from '../../../hooks/usePopup';

// @TODO : Memo Data 가져오는 로직 추가
function ContentMemoEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [textLength, setTextLength] = useState(0);
  const { popupOpen, popupClose } = usePopup();
  const setPopupUI = useSetRecoilState(popupValue);
  const memoRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (searchParams.get('memo')) {
      memoRef.current!.value = searchParams.get('memo') as string;
      memoRef.current?.focus();
    }
  }, []);

  return (
    <PageTemplate
      header={
        <HeaderWithBack
          onClick={() => {
            if (memoRef.current?.value !== searchParams.get('memo')) {
              setPopupUI({
                Icon: <ImportantIcon />,
                Header: '저장을 취소하시겠어요?',
                ConfirmButton: {
                  text: '네, 취소할게요',
                  onClick: () => {
                    popupClose();
                    navigate(-1);
                  },
                },
                CloseButton: {
                  text: '아니요',
                  onClick: () => {
                    popupClose();
                  },
                },
              });
              popupOpen();
            } else {
              navigate(-1);
            }
          }}
        >
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
                toast.custom(() => (
                  <Toast>
                    <Typography.Title size="lg" color="white">
                      저장이 완료되었습니다.
                    </Typography.Title>
                  </Toast>
                ));
                navigate(-1);
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
