import { useNavigate } from 'react-router-dom';

import * as S from './style';
import XIcon from '../../../assets/icons/grayx.svg?react';
import PageTemplate from '../../../components/common/PageTemplate';
import Heading from '../../../components/common/Heading';

import CalendarContainer from '../../../components/mytrip/CalendarContainer';

function MyTripDatesSelectPage() {
  const navigate = useNavigate();
  return (
    <PageTemplate nav={false}>
      <div
        style={{ cursor: 'pointer', paddingTop: '15px' }}
        onClick={() => {
          navigate(-1);
        }}
      >
        <XIcon />
      </div>
      <S.HeadingWrapper>
        <Heading size="sm">여행 날짜를 선택해주세요.</Heading>
      </S.HeadingWrapper>
      <CalendarContainer />
    </PageTemplate>
  );
}

export default MyTripDatesSelectPage;
