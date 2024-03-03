import * as S from "../../styles/pages/scrapBook/ScrapBookPage.style";
import PageTemplate from "../../components/common/PageTemplate";
import ScrapedTripJournal from "../../components/scrapBook/ScrapedTripJournal";
import ScrapedTripPlace from "../../components/scrapBook/ScrapedTripPlace";
import useTabBar from "../../hooks/useTabBar";

function ScrapBookPage() {
  const tabs = [
    { id: 1, name: "여행기", content: <ScrapedTripJournal /> },
    { id: 2, name: "여행 장소", content: <ScrapedTripPlace /> },
  ]; // content 속성에 보여줄 컴포넌트 매핑
  const { TabBar, focusedTabIndex } = useTabBar({ tabs });

  return (
    <PageTemplate>
      <S.Header>
        <S.Heading>스크랩 북</S.Heading>
        <TabBar />
      </S.Header>
      <S.Contents>{tabs[focusedTabIndex].content}</S.Contents>
    </PageTemplate>
  );
}

export default ScrapBookPage;
