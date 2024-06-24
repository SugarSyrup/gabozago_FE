import XIcon from '../../../assets/icons/x.svg?react';
import Typography from '../../common/Typography';

import * as S from './style';

interface Props {
  name: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function LocationTag({ name, onClick }: Props) {
  return (
    <S.Container onClick={onClick}>
      <Typography.Title size="md" color="inherit">
        {name}
      </Typography.Title>
      <div>
        <XIcon />
      </div>
    </S.Container>
  );
}

export default LocationTag;
