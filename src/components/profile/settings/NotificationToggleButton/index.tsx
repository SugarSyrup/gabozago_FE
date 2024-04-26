import * as S from "./style";
import { MouseEventHandler } from "react";

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
