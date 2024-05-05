import * as S from "./style";
import { ChangeEventHandler, useState } from "react";
import PageTemplate from "../../../components/common/PageTemplate";
import PageHeader from "../../../components/common/PageHeader";
import Button from "../../../components/common/Button";
import { post } from "../../../utils/api";
import { useNavigate } from "react-router-dom";

function FeedBackPage() {
  const navigate = useNavigate();
  const [text, setText] = useState<string>("");
  const suggestionChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    if (text.length <= 2000) {
      setText(e.target.value);
    }
  };

  return (
    <PageTemplate
      nav={
        <S.ButtonContainer>
          <Button
            active={true}
            size="lg"
            type="normal"
            width="100%"
            onClick={() => {
              const token = localStorage.getItem("access_token");

              if (token) {
                post<string>(
                  `${import.meta.env.VITE_BASE_URL}settings/support/opinion`,
                  { content: text },
                  {
                    headers: { Authorization: token },
                  }
                );

                alert("접수되었습니다. 고객님의 소중한 의견 감사합니다.");
                navigate(-1);
              }
            }}
          >
            제출하기
          </Button>
        </S.ButtonContainer>
      }
      header={<PageHeader>의견 보내기</PageHeader>}
    >
      <S.Container>
        <div>
          <S.TitleParagraph>
            서비스 제안, 칭찬, 불편한 점, 바라는 점 등<br /> 자유롭게
            남겨주세요!
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
          />
          <S.TextCountParagraph>{text.length}/2000</S.TextCountParagraph>
        </div>
      </S.Container>
    </PageTemplate>
  );
}

export default FeedBackPage;
