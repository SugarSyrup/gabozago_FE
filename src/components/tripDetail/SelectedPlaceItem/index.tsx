import * as S from './style';
import CircleXIcon from '../../../assets/icons/circleX_white.svg?react';
import Typography from '../../common/Typography';
import LocationPlaceholderIcon from '../../mytrip/LocationPlaceholderIcon';

interface Props {
  name: string;
  thumbnail?: string;
  id: number;
  onDelete: (id: number) => void;
}

function SelectedPlaceItem({ id, name, thumbnail, onDelete }: Props) {
  return (
    <S.Container>
      <S.DeleteIcon
        onClick={() => {
          onDelete(id);
        }}
      >
        <CircleXIcon />
      </S.DeleteIcon>
      <S.Thumbnail>
        {thumbnail ? (
          <img src={thumbnail} />
        ) : (
          <LocationPlaceholderIcon type={((id % 5) + 1) as 1 | 2 | 3 | 4 | 5} />
        )}
      </S.Thumbnail>
      <Typography.Body maxWidth={50} size="md">
        {name}
      </Typography.Body>
    </S.Container>
  );
}

export default SelectedPlaceItem;
