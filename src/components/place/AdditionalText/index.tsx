import { useState } from 'react';

import UpChevronIcon from '@_icons/chevron_top.svg?react';
import DownChevronIcon from '@_icons/chevron_bottom.svg?react';

import * as S from './style';

interface Props {
  children: React.ReactNode;
  data: string;
}

function AdditionalText({ children, data }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.Container>
      <S.TextContainer>
        {isOpen ? (
          <>
            {children}
            <S.Desc dangerouslySetInnerHTML={{ __html: data }} />
          </>
        ) : (
          children
        )}
      </S.TextContainer>
      {isOpen ? (
        <UpChevronIcon
          onClick={() => {
            setIsOpen(false);
          }}
        />
      ) : (
        <DownChevronIcon
          onClick={() => {
            setIsOpen(true);
          }}
        />
      )}
    </S.Container>
  );
}

export default AdditionalText;
