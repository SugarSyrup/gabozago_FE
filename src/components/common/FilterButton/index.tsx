import { MouseEventHandler } from 'react'
import * as S from './style'
import ChevronBottomIcon from '../../../assets/icons/chevron_bottom_small.svg?react'

interface Props {
  name: string
  onClick: MouseEventHandler
  isActive: boolean
}

function FilterButton({ name, onClick, isActive }: Props) {
  return (
    <S.FilterButton onClick={onClick} className={isActive ? 'active' : ''}>
      {name}
      <ChevronBottomIcon />
    </S.FilterButton>
  )
}

export default FilterButton
