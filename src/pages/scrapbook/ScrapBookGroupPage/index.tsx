import * as S from "./style";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import PageTemplate from "../../../components/common/PageTemplate";
import ScrapedJournalItem from "../../../components/scrapBook/ScrapedJournalItem";
import { scrapedJournalGroupsState } from "../../../recoil/scrapBook/scrapState";
import PageHeader from "../../../components/common/PageHeader";
import { useState } from "react";
import TabBar from "../../../components/common/TabBar";

function ScrapBookGroupPage() {
  const { id } = useParams();
  const journalGroups = useRecoilValue(scrapedJournalGroupsState);
  const group = journalGroups.find((group) => String(group.id) === id);
  const [focusedTabIndex, setFocusedTabIndex] = useState<number>(0);
  const tabs = [
    { id: "아티클", name: "아티클" },
    { id: "숏폼", name: "숏폼" },
  ];

  return (
    <PageTemplate
      header={
        <div>
          <PageHeader>{group.title}</PageHeader>
          <S.TabBarContainer>
            <TabBar
              tabs={tabs}
              focusedTabIndex={focusedTabIndex}
              setFocusedTabIndex={setFocusedTabIndex}
              widthStyle="fit-content"
              fontSize="16px"
              color="#A6A6A6"
            />
          </S.TabBarContainer>
        </div>
      }
    >
      {tabs[focusedTabIndex].name === "아티클" ? (
        <S.JournalList>
          {group.journals.map((item) => (
            <ScrapedJournalItem
              title={item.title}
              thumbnail={item.thumbnail}
              username={item.username}
              like={item.like}
              scraped={item.scraped}
            />
          ))}
        </S.JournalList>
      ) : (
        <></>
      )}
    </PageTemplate>
  );
}

export default ScrapBookGroupPage;
