import InterviewIcon from '../../../assets/icons/interview.svg?react';

import * as S from './style';

interface Props {
  content: string;
}

function Interview({ content }: Props) {
  return (
    <S.Container>
      <InterviewIcon />
      <S.Content dangerouslySetInnerHTML={{ __html: content }} />
    </S.Container>
  );
}
export default Interview;
