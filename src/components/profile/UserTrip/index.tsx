import ChevronRightIcon from '../../../assets/icons/chevron_right.svg?react';
import CirclePlusIcon from '../../../assets/icons/plus_circle.svg?react';

import Button from '../../common/Button';
import Typography from '../../common/Typography';

import TripList from '../TripList';
import * as S from './style';

function UserTrip() {
  return (
    <S.Container>
      <S.Header>
        <S.TravelLink to="/mytrip/all">
          <Typography.Body size="lg" color="inherit">
            전체보기
          </Typography.Body>
          <ChevronRightIcon />
        </S.TravelLink>
      </S.Header>
      <TripList />
      <S.CreateMyTrip to="/mytrip/create">
        <Button type="text" size="md">
          <CirclePlusIcon />
          <Typography.Title size="md" color="#484848">
            새로운 여행 일정 만들기
          </Typography.Title>
        </Button>
      </S.CreateMyTrip>
    </S.Container>
  );
}

export default UserTrip;
