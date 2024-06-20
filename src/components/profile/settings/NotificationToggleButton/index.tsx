import { MouseEventHandler } from 'react';
import * as S from './style';

interface Props {
  name: string;
  desc: string;
  active: boolean;
  onClick: MouseEventHandler;
}
function NotificationToggleButton({ name, desc, active, onClick }: Props) {
  return (
    <S.Container>
      <div>
        <p>{name}</p>
        <p>{desc}</p>
      </div>
      <S.ToggleButton active={active} onClick={onClick} />
    </S.Container>
  );
}

export default NotificationToggleButton;
