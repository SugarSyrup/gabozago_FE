import { useEffect } from "react";
import * as S from "../../styles/scrapBook/ScrapedTripJournal.style";
import addCircle from "../../assets/icons/add_circle.svg";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { scrapedJournalGroupsState } from "../../recoil/scrapBook/scrapState";

function ScrapedTripJournal() {
  const navigate = useNavigate();
  const journalGroups = useRecoilValue(scrapedJournalGroupsState);

  useEffect(() => {
    // user의 여행기 스크랩 목록 가져오기
  }, []);

  return (
    <S.GroupList>
      {journalGroups.map((group) => (
        <S.GroupItem
          key={group.id}
          background={
            group.journals.length !== 0 ? group.journals[0].thumbnail : ""
          }
          onClick={() => {
            navigate(`./${group.id}`);
          }}
        >
          <div></div>
          <p>{group.title}</p>
        </S.GroupItem>
      ))}
      <S.CreateNewGroupItem key={"createGroup"} background={addCircle}>
        <div
          onClick={() => {
            alert("새 그룹 생성");
          }}
        ></div>
        <p>새 그룹 만들기</p>
      </S.CreateNewGroupItem>
    </S.GroupList>
  );
}

export default ScrapedTripJournal;
