import * as S from "./style";
import PageTemplate from "../../../components/common/PageTemplate";
import PageHeader from "../../../components/common/PageHeader";
import ExtraButton from "../../../components/common/ExtraButton";
import QuestionsIcon from "../../../assets/icons/cs-questions.svg?react";
import SettingsIcon from "../../../assets/icons/cs-settings.svg?react";
import ServicesIcon from "../../../assets/icons/cs-services.svg?react";
import RightChevron from "../../../assets/icons/chevron_right.svg?react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/common/Button";

function CSCenterPage() {
  const [focusedCategory, setFocusedCategory] = useState<string>("01");
  const [questions, setQuestions] = useState<
    {
      id: string;
      title: string;
    }[]
  >([
    { id: "01", title: "내 스크랩을 친구에게 공유하고 싶어요." },
    { id: "02", title: "내 스크랩을 친구에게 공유하고 싶어요." },
    { id: "03", title: "내 스크랩을 친구에게 공유하고 싶어요." },
  ]);
  const navigate = useNavigate();
  const categoryMap: { value: string; text: string; icon: JSX.Element }[] = [
    {
      value: "01",
      text: "가장 많은 질문",
      icon: <QuestionsIcon />,
    },
    {
      value: "02",
      text: "계정 설정",
      icon: <SettingsIcon />,
    },
    { value: "03", text: "서비스 / 기타", icon: <ServicesIcon /> },
  ];

  useEffect(() => {
    // @todo: focusedCategory에 맞게 리스트 요청, 결과 setQuestions
  }, [focusedCategory]);

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
              navigate("./inquiry");
            }}
          >
            서비스 문의하기
          </Button>
        </S.ButtonContainer>
      }
      header={<PageHeader>고객센터/도움말</PageHeader>}
    >
      <S.Container>
        <div>
          <S.HeadingContainer>
            <S.Heading>자주 묻는 질문</S.Heading>
            <ExtraButton
              label="전체보기"
              onClick={() => {
                navigate("./faq");
              }}
            />
          </S.HeadingContainer>
          <S.CategoryButtonList>
            {categoryMap.map(({ value, text, icon }) => (
              <S.CategoryButton
                className={focusedCategory === value ? "active" : ""}
                onClick={() => {
                  setFocusedCategory(value);
                }}
              >
                {icon}
                <span>{text}</span>
              </S.CategoryButton>
            ))}
          </S.CategoryButtonList>
          <S.QuestionList>
            {questions.map(({ id, title }) => (
              <li>
                <Link to={`./${id}`}>{title}</Link>
              </li>
            ))}
          </S.QuestionList>
        </div>
        <S.StyledLink to={"./history"}>
          <S.HeadingContainer className="my-history">
            <S.Heading>내 문의 내역 확인하기</S.Heading>
            <RightChevron />
          </S.HeadingContainer>
        </S.StyledLink>
      </S.Container>
    </PageTemplate>
  );
}

export default CSCenterPage;
