import * as S from "./style";
import React from "react";
import PageTemplate from "../../../components/common/PageTemplate";
import PageHeader from "../../../components/common/PageHeader";

function AnnouncePage() {
  return (
    <PageTemplate nav={false} header={<PageHeader>공지사항</PageHeader>}>
      <div></div>
    </PageTemplate>
  );
}

export default AnnouncePage;
