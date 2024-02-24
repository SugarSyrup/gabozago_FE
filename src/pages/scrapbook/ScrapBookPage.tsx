import * as S from "../../styles/pages/scrapBook/scrapBookPage.style";
import PageTemplate from "../../components/common/PageTemplate";
import { useState } from "react";
import ScrapedTripJournal from "../../components/scrapBook/ScrapedTripJournal";
import ScrapedTripPlace from "../../components/scrapBook/ScrapedTripPlace";

function ScrapBookPage() {
  const tabs = [
    { id: 1, title: "여행기", content: <ScrapedTripJournal /> },
    { id: 2, title: "여행 장소", content: <ScrapedTripPlace /> },
  ]; // content 속성에 보여줄 컴포넌트 매핑
  const [focusedTabId, setFocusedTabId] = useState(1);

  return (
    <PageTemplate>
      <S.Header>
        <S.Heading>스크랩 북</S.Heading>
        <S.TabList>
          {tabs.map((tab) => (
            <S.TabItem
              focused={tab.id === focusedTabId}
              onClick={() => {
                setFocusedTabId(tab.id);
              }}
            >
              {tab.title}
            </S.TabItem>
          ))}
        </S.TabList>
      </S.Header>
      <S.Contents>
        {tabs.find((tab) => tab.id === focusedTabId)?.content}
      </S.Contents>
    </PageTemplate>
  );
}

export default ScrapBookPage;
