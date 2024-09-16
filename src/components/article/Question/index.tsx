import QuestionIcon from '../../../assets/icons/question.svg?react';

import * as S from './style';

interface Props {
  content: string;
}

function Question({ content }: Props) {
  return (
    <S.Container>
      <QuestionIcon />
      <S.Content dangerouslySetInnerHTML={{ __html: content }} />
    </S.Container>
  );
}

export default Question;
