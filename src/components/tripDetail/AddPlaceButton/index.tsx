import { MouseEventHandler } from 'react';
import MapPinIcon from '../../../assets/icons/map_pin.svg?react';
import * as S from './style';

interface Props {
  size?: 'default' | 'small';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
function AddPlaceButton({ size = 'default', onClick = () => {} }: Props) {
  return (
    <S.AddButton size={size} onClick={onClick}>
      <MapPinIcon />
      <span>장소 추가하기</span>
    </S.AddButton>
  );
}

export default AddPlaceButton;
