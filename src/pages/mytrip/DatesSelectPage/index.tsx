import { useNavigate } from 'react-router-dom';

import * as S from './style';
import XIcon from '../../../assets/icons/grayx.svg?react';
import PageTemplate from '../../../components/common/PageTemplate';
import Heading from '../../../components/common/Heading';

function MyTripDatesSelectPage() {
  const navigate = useNavigate();
  return (
    <PageTemplate nav={false}>
      <S.HeadingWrapper>
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => {
            navigate(-1);
          }}
        >
          <XIcon />
        </div>
        <Heading size="sm">여행 날짜를 선택해주세요.</Heading>
      </S.HeadingWrapper>
      {/* <CalendarContainer /> */}
    </PageTemplate>
  );
}

export default MyTripDatesSelectPage;
