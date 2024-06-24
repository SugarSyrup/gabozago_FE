import EditorIcon from '../../../assets/icons/editor.svg?react';

import * as S from './style';

interface Props {
  content: string;
}

function Editor({ content }: Props) {
  return (
    <S.Container>
      <EditorIcon />
      <S.Content dangerouslySetInnerHTML={{ __html: content }} />
    </S.Container>
  );
}

export default Editor;
