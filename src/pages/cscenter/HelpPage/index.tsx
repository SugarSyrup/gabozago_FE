import * as S from "./style";
import React from "react";
import PageTemplate from "../../../components/common/PageTemplate";
import PageHeader from "../../../components/common/PageHeader";

function HelpPage() {
  return (
    <PageTemplate nav={false} header={<PageHeader>고객센터/도움말</PageHeader>}>
      <div></div>
    </PageTemplate>
  );
}

export default HelpPage;
