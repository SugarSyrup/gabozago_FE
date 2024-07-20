import { useNavigate } from 'react-router-dom';
import * as S from './Header.style';
import BackButton from '@_icons/chevron_left.svg?react';
import Typography from '../Typography';

interface Props {
  children: string;
}

function HeaderWithBack({ children }: Props) {
  const navigate = useNavigate();
  return (
    <S.Header>
      <S.LeftBackButtonWrapper>
        <BackButton
          onClick={() => {
            navigate(-1);
          }}
        />
      </S.LeftBackButtonWrapper>
      <S.HeaderText>
        <Typography.Headline size="sm">{children}</Typography.Headline>
      </S.HeaderText>
    </S.Header>
  );
}

export default HeaderWithBack;
