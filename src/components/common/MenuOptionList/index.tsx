import Typography from "../Typography";
import * as S from "./style";
import { MouseEventHandler } from "react";

interface Props {
  menus: Menu[];
}

interface Menu {
  icon: JSX.Element;
  name: string;
  onClick: MouseEventHandler;
}

function MenuOptionList({ menus }: Props) {
  return (
    <S.MenuList>
      {menus.map(({ icon, name, onClick }) => (
        <S.MenuItem onClick={onClick}>
          {icon}
          <Typography.Body size="lg">{name}</Typography.Body>
        </S.MenuItem>
      ))}
    </S.MenuList>
  );
}

export default MenuOptionList;
