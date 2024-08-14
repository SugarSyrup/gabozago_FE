import { HeaderWithBack } from '../../../components/common/Header';
import PageTemplate from '../../../components/common/PageTemplate';

import ViewAllMyTrips from '../../../components/mytrip/ViewAllMyTrips';

function ViewAllPage() {
  return (
    <PageTemplate nav={null} header={<HeaderWithBack>내 여행 기록</HeaderWithBack>}>
      <ViewAllMyTrips />
    </PageTemplate>
  );
}

export default ViewAllPage;
