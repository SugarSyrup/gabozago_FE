import { MouseEventHandler } from 'react';
import * as S from './style';
import ChevronBottomIcon from '../../../assets/icons/chevron_bottom_small.svg?react';
import Typography from '@_common/Typography';

interface Props {
  name: string;
  onClick: MouseEventHandler;
  isActive: boolean;
}

function FilterButton({ name, onClick, isActive }: Props) {
  return (
    <S.FilterButton onClick={onClick} className={isActive ? 'active' : ''}>
      <Typography.Label size="lg" color="inherit" maxWidth={58}>
        {name}
      </Typography.Label>
      <ChevronBottomIcon />
    </S.FilterButton>
  );
}

export default FilterButton;
