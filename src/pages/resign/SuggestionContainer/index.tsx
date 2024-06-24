import { useState } from 'react';
import * as S from './style';

function SuggestionContainer({ suggestionRef }: { suggestionRef: HTMLTextAreaElement }) {
  const [suggestionText, setSuggestionText] = useState<string>('');

  return (
    <S.SuggestContainer>
      <div>
        <S.TitleParagraph>서비스 개선을 위한 제안사항이 있으신가요?</S.TitleParagraph>
        <S.TitleDescParagraph>
          여러분의 소중한 의견을 반영하여 꼭 더 나은 서비스로 찾아뵙겠습니다.
        </S.TitleDescParagraph>
      </div>
      <S.TextAreaContainer>
        <S.TextArea
          placeholder="선택하신 항목에 대한 자세한 이유를 남겨주시면, 서비스 개선에 큰 도움이 됩니다."
          maxLength={200}
          ref={suggestionRef}
          value={suggestionText}
          onChange={(e) => {
            setSuggestionText(e.target.value);
          }}
        />
        <S.TextCountParagraph>
          {suggestionText.length}
          /200
        </S.TextCountParagraph>
      </S.TextAreaContainer>
    </S.SuggestContainer>
  );
}

export default SuggestionContainer;
