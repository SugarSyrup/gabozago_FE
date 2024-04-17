import * as S from "./style";
import PageTemplate from "../../../components/common/PageTemplate";
import PageHeader from "../../../components/common/PageHeader";
import CheckBoxItem from "../../../components/common/CheckBox";
import { ChangeEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";

interface TReason {
  value: string;
  text: string;
}

function ResignPage() {
  const navigate = useNavigate();
  const [selectedReason, setSelectedReason] = useState<string[]>([]);
  const toggleReason: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.id;

    if (selectedReason.includes(value)) {
      setSelectedReason((prev) => prev.filter((item) => item !== value));
    } else {
      setSelectedReason((prev) => [...prev, value]);
    }
  };

  const [suggestionText, setSuggestionText] = useState<string>("");
  const suggestionChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    if (suggestionText.length <= 200) {
      setSuggestionText(e.target.value);
    }
  };

  // @todo: 로그인 유저 정보 가져오기
  const username = "최민석";
  const reasonMap: TReason[] = [
    { value: "01", text: "재가입" },
    { value: "02", text: "이용 빈도 및 기대감이 낮음" },
    { value: "03", text: "콘텐츠 및 장소 정보의 부족" },
    { value: "04", text: "개인정보보호 및 보안" },
    { value: "05", text: "다른 서비스로의 이동" },
    { value: "06", text: "기타" },
  ];

  return (
    <PageTemplate
      nav={
        <S.ConfirmButtonsContainer>
          <S.ConfirmButton
            styleTheme="secondary"
            onClick={() => {
              if (selectedReason.length === 0) {
                alert("탈퇴 사유를 선택해 주세요.");
                return;
              }
              // @todo: API를 통한 회원 탈퇴 요청
              // @todo: 로그아웃(토큰 없애기)
              navigate("/leave/done");
            }}
          >
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
      header={<PageHeader>탈퇴하기</PageHeader>}
    >
      <S.NoticeContainer>
        <S.TitleHeading>정말로 탈퇴하시겠어요?</S.TitleHeading>
        <S.DescParagraph>
          <span>{username}</span>님의 아래 정보는 모두 삭제되며, 탈퇴 시 정보
          복구가 어려워요.
        </S.DescParagraph>
        <S.InfoContainer>
          <S.InfoTitleParagraph>회원 탈퇴 시 삭제될 정보</S.InfoTitleParagraph>
          <ul className="info">
            <li>계정 및 프로필 정보</li>
            <li>내 여행 및 장소 저장 정보</li>
            <li>내 여행 일정 정보</li>
            <li>작성한 글, 댓글 편집 권한 등</li>
          </ul>
          <S.InfoTitleParagraph>회원 탈퇴 시 유지될 정보</S.InfoTitleParagraph>
          <ul className="info">
            <li>작성한 게시글 및 댓글, 후기 전체</li>
            <li>서비스 이용 로그 등</li>
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
            <S.TitleDescParagraph>
              최소 1개 이상의 탈퇴 사유를 선택해주세요.
            </S.TitleDescParagraph>
          )}
        </div>
        <S.InfoContainer>
          <ul className="checkboxs">
            {reasonMap.map(({ value, text }) => (
              <li>
                <CheckBoxItem
                  name="탈퇴 사유"
                  inputId={value}
                  onChange={toggleReason}
                >
                  {text}
                </CheckBoxItem>
              </li>
            ))}
          </ul>
        </S.InfoContainer>
      </S.ReasonContainer>
      <S.SuggestContainer>
        <div>
          <S.TitleParagraph>
            서비스 개선을 위한 제안사항이 있으신가요?
          </S.TitleParagraph>
          <S.TitleDescParagraph>
            여러분의 소중한 의견을 반영하여 꼭 더 나은 서비스로 찾아뵙겠습니다.
          </S.TitleDescParagraph>
        </div>
        <S.TextAreaContainer>
          <S.TextArea
            placeholder="선택하신 항목에 대한 자세한 이유를 남겨주시면, 서비스 개선에 큰 도움이 됩니다."
            maxLength={200}
            value={suggestionText}
            onChange={suggestionChangeHandler}
          />
          <S.TextCountParagraph>
            {suggestionText.length}/200
          </S.TextCountParagraph>
        </S.TextAreaContainer>
      </S.SuggestContainer>
    </PageTemplate>
  );
}

export default ResignPage;
