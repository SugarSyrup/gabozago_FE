import { ChangeEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";

import PageTemplate from "../../../components/common/PageTemplate";
import PageHeader from "../../../components/common/PageHeader";
import Button from "../../../components/common/Button";
import Typography from "../../../components/common/Typography";

import { post } from "../../../utils/api";
import usePopup from "../../../hooks/usePopup";

import * as S from "./style";

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
  const {Popup, popupOpen} = usePopup();

  return (
    <>
    <Popup>
      <S.PopupContainer>
        <Typography.Title size="lg" noOfLine={2}>의견을 남겨주셔서 <br/> 감사합니다.</Typography.Title>
        <Typography.Body size="lg" color="#545454">더욱 발전하는 가보자고가 되겠습니다:)</Typography.Body>
        <div>
          <S.PopupConfirmButton
            onClick={() => {
              navigate(-1);
            }}
          >
            <Typography.Label size="lg" color="inherit">확인</Typography.Label>
          </S.PopupConfirmButton>
        </div>
      </S.PopupContainer>
    </Popup>
    <PageTemplate
      nav={
        <S.ButtonContainer>
          <Button
            active={true}
            size="lg"
            type="normal"
            width="100%"
            onClick={() => {
              post<string>(
                `/settings/support/opinion`,
                { content: text }
              );
              popupOpen();
            }}
          >
            제출하기
          </Button>
        </S.ButtonContainer>
      }
      header={<PageHeader><Typography.Title size="lg">의견 보내기</Typography.Title></PageHeader>}
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
    </>
  );
}

export default FeedBackPage;
