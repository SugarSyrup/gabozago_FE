import CheckPointIcon from '../../../assets/icons/checkpoint.svg?react';
import Typography from '../../common/Typography';

import * as S from './style';

interface Props {
  data: {
    name: string;
    desc: string;
  }[];
}

function CheckPoints({ data }: Props) {
  return (
    <S.CheckPointList>
      <Typography.Title size="md">CHECK POINT</Typography.Title>
      {data.map((checkpoint) => (
        <S.CheckPointItem key={checkpoint.name}>
          <CheckPointIcon />
          <S.CheckPointText>
            <Typography.Title size="sm" color="inherit">
              {checkpoint.name}
            </Typography.Title>
            <Typography.Label size="sm" color="#424242">
              {checkpoint.desc}
            </Typography.Label>
          </S.CheckPointText>
        </S.CheckPointItem>
      ))}
    </S.CheckPointList>
  );
}

export default CheckPoints;
