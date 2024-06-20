import { MouseEventHandler } from 'react'
import Typography from '../Typography'
import * as S from './style'

interface Props {
  menus: Menu[]
}

interface Menu {
  icon: JSX.Element
  iconColor?: string
  name: string
  onClick: MouseEventHandler
}

function MenuOptionList({ menus }: Props) {
  return (
    <S.MenuList>
      {menus.map(({ icon, iconColor, name, onClick }) => (
        <S.MenuItem color={iconColor} onClick={onClick}>
          {icon}
          <Typography.Body size="lg">{name}</Typography.Body>
        </S.MenuItem>
      ))}
    </S.MenuList>
  )
}

export default MenuOptionList
