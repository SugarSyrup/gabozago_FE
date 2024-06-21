
import PageHeader from "../../../components/common/PageHeader";
import PageTemplate from "../../../components/common/PageTemplate";
import Typography from "../../../components/common/Typography";

import ViewAllMyTrips from "../../../components/mytrip/ViewAllMyTrips";

function ViewAllPage() {
    return(
        <PageTemplate nav={null} header={
            <PageHeader>
                <Typography.Headline size="sm">내 여행 기록</Typography.Headline>
            </PageHeader>
        }>
            <ViewAllMyTrips />
        </PageTemplate>
    )
}

export default ViewAllPage;