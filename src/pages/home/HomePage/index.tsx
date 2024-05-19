import { useState } from "react";

import PageTemplate from "../../../components/common/PageTemplate";
import TabBar from "../../../components/common/TabBar";

import Journals from "../../../components/home/journals/Journals";
import Recommendation from "../../../components/home/Recommendation";
import Articles from "../../../components/home/Articles";

import * as S from "./style";

function HomePage() {
  const [focusedTabIndex, setFocusedTabIndex] = useState<number>(0);
  const tabs = [
    { id: "추천", name: "추천", content: <Recommendation /> },
    { id: "아티클", name: "아티클", content: <Articles /> },
    { id: "숏폼", name: "숏폼", content: <Journals /> },
  ];

  return (
    <PageTemplate
      header={
        <S.Header>
          <TabBar
            tabs={tabs}
            focusedTabIndex={focusedTabIndex}
            setFocusedTabIndex={setFocusedTabIndex}
            widthStyle="fit-content"
            fontSize="20px"
            color="#424242"
          />
        </S.Header>
      }
    >
      {tabs[focusedTabIndex].content}
    </PageTemplate>
  );
}

export default HomePage;
