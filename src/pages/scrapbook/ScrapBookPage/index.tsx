import * as S from "./style";
import { useEffect, useState } from "react";
import PageTemplate from "../../../components/common/PageTemplate";
import ScrapedTripJournal from "../../../components/scrapBook/ScrapedTripJournal";
import ScrapedTripPlace from "../../../components/scrapBook/ScrapedTripPlace";
import TabBar from "../../../components/common/TabBar";
import { scrapPlaceFilterState } from "../../../recoil/filters/scrapPlaceFilterState";
import { useSetRecoilState } from "recoil";

function ScrapBookPage() {
  const [focusedTabIndex, setFocusedTabIndex] = useState<number>(0);
  const setActiveFilters = useSetRecoilState(scrapPlaceFilterState);
  const tabs = [
    { id: 1, name: "콘텐츠", content: <ScrapedTripJournal /> },
    { id: 2, name: "여행 장소", content: <ScrapedTripPlace /> },
  ]; // content 속성에 보여줄 컴포넌트 매핑

  useEffect(() => {
    setActiveFilters({
      ["location"]: []
    });
  }, [])

  return (
    <PageTemplate>
      <S.Header>
        <S.Heading>스크랩 북</S.Heading>
        <TabBar
          tabs={tabs}
          focusedTabIndex={focusedTabIndex}
          setFocusedTabIndex={setFocusedTabIndex}
        />
      </S.Header>
      <S.Contents>{tabs[focusedTabIndex].content}</S.Contents>
    </PageTemplate>
  );
}

export default ScrapBookPage;
