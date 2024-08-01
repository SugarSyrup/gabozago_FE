import { ChangeEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PageTemplate from '../../../components/common/PageTemplate';
import { HeaderWithBack } from '../../../components/common/Header';
import BottomButtonContainer from '../../../components/common/BottomButtonContainer';

import { post } from '@_utils/api';
import usePopup from '../../../hooks/usePopup';

import * as S from './style';
import { useSetRecoilState } from 'recoil';
import { popupValue } from '@_recoil/common/PopupValue';

function FeedBackPage() {
  const navigate = useNavigate();
  const [text, setText] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const setPopupState = useSetRecoilState(popupValue);
  const suggestionChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    if (text.length <= 2000) {
      setText(e.target.value);
    }
  };
  const { popupOpen, popupClose } = usePopup();
  const onSubmit = async () => {
    if (text.length < 20) {
      alert('20자 이상 작성해주세요.');
      return;
    }

    if (!isSubmitted) {
      await post<string>('/settings/support/opinion', {
        content: text.trim(),
      });

      setIsSubmitted(true);
      setPopupState({
        Header: '의견을 남겨주셔서 감사합니다.',
        Description: '더욱 발전하는 가보자고가 되겠습니다:)',
        ConfirmButton: {
          onClick: () => {
            popupClose();
            navigate(-1);
          },
          text: '확인',
        },
      });
      popupOpen();
    }
  };

  return (
    <>
      <PageTemplate
        nav={
          <BottomButtonContainer onClick={onSubmit} bgColor="blue">
            의견 보내기
          </BottomButtonContainer>
        }
        header={<HeaderWithBack>의견 보내기</HeaderWithBack>}
      >
        <S.Container>
          <div>
            <S.TitleParagraph>
              서비스 제안, 칭찬, 불편한 점, 바라는 점 등
              <br /> 자유롭게 남겨주세요!
            </S.TitleParagraph>
            <S.TitleDescParagraph>
              남겨주신 의견은 가보자고 운영에 큰 도움이 됩니다:)
            </S.TitleDescParagraph>
          </div>
          <div>
            <S.TextArea
              placeholder="내용을 입력하세요.(최대 2000자)"
              maxLength={2000}
              value={text}
              onChange={suggestionChangeHandler}
              required
            />
            <S.TextCountParagraph>
              {text.length}
              /2000
            </S.TextCountParagraph>
          </div>
        </S.Container>
      </PageTemplate>
    </>
  );
}

export default FeedBackPage;
