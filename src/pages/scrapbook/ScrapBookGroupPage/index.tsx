import * as S from "./style";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import PageTemplate from "../../../components/common/PageTemplate";
import Heading from "../../../components/common/Heading";
import BackButton from "../../../components/common/BackButton";
import ScrapedJournalItem from "../../../components/scrapBook/ScrapedJournalItem";
import { scrapedJournalGroupsState } from "../../../recoil/scrapBook/scrapState";

function ScrapBookGroupPage() {
  const { id } = useParams();
  const journalGroups = useRecoilValue(scrapedJournalGroupsState);
  const group = journalGroups.find((group) => group.id === id);

  return (
    <PageTemplate>
      {group ? (
        <>
          <S.Header>
            <S.BackButtonContainer>
              <BackButton />
            </S.BackButtonContainer>
            <Heading size="sm">{group.title}</Heading>
          </S.Header>
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
        </>
      ) : (
        "존재하지 않는 폴더입니다."
      )}
    </PageTemplate>
  );
}

export default ScrapBookGroupPage;
