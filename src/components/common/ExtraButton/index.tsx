import { MouseEventHandler } from 'react';
import * as S from './style';
import RightChevronIcon from '../../../assets/icons/chevron_right.svg?react';

interface Props {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function ExtraButton({ label, onClick }: Props) {
  return (
    <S.Button onClick={onClick}>
      {label} <RightChevronIcon />
    </S.Button>
  );
}

export default ExtraButton;
