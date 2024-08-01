import { ChangeEventHandler, useRef, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import Typography from '../../../../components/common/Typography';
import PageTemplate from '../../../../components/common/PageTemplate';
import CheckBoxItem from '../../../../components/common/CheckBox';

import { post } from '@_utils/api';

import SuggestionContainer from '../../../../components/Resign/SuggestionContainer';
import { HeaderWithBack } from '../../../../components/common/Header';

import * as S from './style';

interface TReason {
  value: string;
  text: string;
}

function ResignPage() {
  const nickname = useLoaderData() as string;
  const navigate = useNavigate();
  const [selectedReason, setSelectedReason] = useState<string[]>([]);
  const [isPending, setIsPending] = useState<boolean>(false);
  const suggestionRef = useRef<HTMLTextAreaElement>(null);

  const reasonMap: TReason[] = [
    { value: '01', text: '재가입' },
    { value: '02', text: '이용 빈도 및 기대감이 낮음' },
    { value: '03', text: '콘텐츠 및 장소 정보의 부족' },
    { value: '04', text: '개인정보보호 및 보안' },
    { value: '05', text: '다른 서비스로의 이동' },
    { value: '06', text: '기타' },
  ];

  // 탈퇴 사유 선택
  const toggleReason: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.id;

    if (selectedReason.includes(value)) {
      setSelectedReason((prev) => prev.filter((item) => item !== value));
    } else {
      setSelectedReason((prev) => [...prev, value]);
    }
  };

  // 탈퇴하기
  const onSubmit = async () => {
    if (isPending) {
      return;
    }
    if (selectedReason.length === 0) {
      alert('탈퇴 사유를 선택해 주세요.');
      return;
    }

    const reqData = {
      reason: selectedReason.map((item) => `WDRL${item}`),
      suggestion: suggestionRef?.current.value || null,
    };

    setIsPending(true);
    const { data } = await post<{
      message: 'INACTIVATE SUCCESS' | 'INACTIVATE FAILED';
    }>('/settings/withdraw', reqData);

    if (data.message === 'INACTIVATE SUCCESS') {
      localStorage.clear(); // 로그아웃
      setIsPending(false);
      navigate('/leave/done');
    } else {
      alert('ERROR: 오류가 발생했습니다.');
      setIsPending(false);
    }
  };

  return (
    <PageTemplate
      nav={
        <S.ConfirmButtonsContainer>
          <S.ConfirmButton styleTheme="secondary" onClick={onSubmit}>
            탈퇴하기
          </S.ConfirmButton>
          <S.ConfirmButton
            styleTheme="primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            취소하기
          </S.ConfirmButton>
        </S.ConfirmButtonsContainer>
      }
      header={<HeaderWithBack>탈퇴하기</HeaderWithBack>}
    >
      <S.NoticeContainer>
        <S.TitleHeading>정말로 탈퇴하시겠어요?</S.TitleHeading>
        <S.DescParagraph>
          <Typography.Body size="lg" color="inherit" noOfLine={4}>
            <strong>{nickname} </strong>
            님의 아래 정보는 모두 삭제되며,
            <br /> 탈퇴 시 정보 복구가 어려워요.
          </Typography.Body>
        </S.DescParagraph>
        <S.InfoContainer>
          <S.InfoTitleParagraph>회원 탈퇴 시 삭제될 정보</S.InfoTitleParagraph>
          <ul className="info">
            <li>
              <Typography.Body size="lg" color="inherit">
                계정 및 프로필 정보
              </Typography.Body>
            </li>
            <li>
              <Typography.Body size="lg" color="inherit">
                내 여행 및 장소 저장 정보
              </Typography.Body>
            </li>
            <li>
              <Typography.Body size="lg" color="inherit">
                내 여행 일정 정보
              </Typography.Body>
            </li>
            <li>
              <Typography.Body size="lg" color="inherit">
                작성한 글, 댓글 편집 권한 등
              </Typography.Body>
            </li>
          </ul>
          <S.InfoTitleParagraph>회원 탈퇴 시 유지될 정보</S.InfoTitleParagraph>
          <ul className="info">
            <li>
              <Typography.Body size="lg" color="inherit">
                작성한 게시글 및 댓글, 후기 전체
              </Typography.Body>
            </li>
            <li>
              <Typography.Body size="lg" color="inherit">
                서비스 이용 로그 등
              </Typography.Body>
            </li>
          </ul>
        </S.InfoContainer>
      </S.NoticeContainer>
      <S.ReasonContainer>
        <div>
          <S.TitleParagraph>
            가보자고를 탈퇴하려는 이유가 무엇인가요? (복수선택 가능)
            <span className="required-text">필수</span>
          </S.TitleParagraph>
          {selectedReason.length === 0 && (
            <S.TitleDescParagraph>최소 1개 이상의 탈퇴 사유를 선택해주세요.</S.TitleDescParagraph>
          )}
        </div>
        <S.InfoContainer>
          <ul className="checkboxs">
            {reasonMap.map(({ value, text }) => (
              <li>
                <CheckBoxItem name="탈퇴 사유" inputId={value} onChange={toggleReason}>
                  {text}
                </CheckBoxItem>
              </li>
            ))}
          </ul>
        </S.InfoContainer>
      </S.ReasonContainer>
      <SuggestionContainer suggestionRef={suggestionRef} />
    </PageTemplate>
  );
}

export default ResignPage;
