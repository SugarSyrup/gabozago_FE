import { useNavigate } from 'react-router-dom';
import * as S from './Header.style';
import BackButton from '@_icons/chevron_left.svg?react';

interface Props {
  children: string;
}

function HeaderWithBack({ children }: Props) {
  const navigate = useNavigate();
  return (
    <S.Header>
      <S.LeftIconContainer>
        <BackButton
          onClick={() => {
            navigate(-1);
          }}
        />
      </S.LeftIconContainer>
      <S.HeaderText>{children}</S.HeaderText>
    </S.Header>
  );
}

export default HeaderWithBack;
