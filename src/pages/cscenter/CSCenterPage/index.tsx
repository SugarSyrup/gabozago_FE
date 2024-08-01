import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { HeaderWithBack } from '../../../components/common/Header';
import PageTemplate from '../../../components/common/PageTemplate';
import BottomButtonContainer from '../../../components/common/BottomButtonContainer';

import QuestionsIcon from '../../../assets/icons/cs-questions.svg?react';
import SettingsIcon from '../../../assets/icons/cs-settings.svg?react';
import ServicesIcon from '../../../assets/icons/cs-services.svg?react';
import RightChevron from '../../../assets/icons/chevron_right.svg?react';

import { get } from '@_utils/api';

import * as S from './style';

function CSCenterPage() {
  const [focusedCategory, setFocusedCategory] = useState<string>('01');
  const [questions, setQuestions] = useState<
    {
      id: string | number;
      category?: string;
      title: string;
    }[]
  >([{ id: '00', title: '-' }]);
  const navigate = useNavigate();
  const categoryMap: { value: string; text: string; icon: JSX.Element }[] = [
    {
      value: '01',
      text: '가장 많은 질문',
      icon: <QuestionsIcon />,
    },
    {
      value: '02',
      text: '계정 설정',
      icon: <SettingsIcon />,
    },
    { value: '03', text: '서비스 / 기타', icon: <ServicesIcon /> },
  ];

  useEffect(() => {
    get<{
      next: string;
      previous: string;
      results: { id: number; category: string; title: string }[];
    }>('/settings/support/help/faq', {
      params: { category: `FAQ${focusedCategory}` },
    }).then(({ data }) => setQuestions(data.results));
  }, [focusedCategory]);

  return (
    <PageTemplate
      nav={
        <BottomButtonContainer
          onClick={() => {
            navigate('./inquiry');
          }}
          bgColor="blue"
        >
          서비스 문의하기
        </BottomButtonContainer>
      }
      header={<HeaderWithBack>고객센터•도움말</HeaderWithBack>}
    >
      <S.Container>
        <div>
          <S.HeadingContainer>
            <S.Heading>자주 묻는 질문</S.Heading>
          </S.HeadingContainer>
          <S.CategoryButtonList>
            {categoryMap.map(({ value, text, icon }) => (
              <S.CategoryButton
                key={value}
                className={focusedCategory === value ? 'active' : ''}
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
              <li key={id}>
                <Link to={`./faq/${id}`}>{title}</Link>
              </li>
            ))}
          </S.QuestionList>
        </div>
        <S.StyledLink to="./history">
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
