import * as S from "./style";
import { useRef } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import addCircle from "../../../assets/icons/add_circle.svg";
import { scrapedJournalGroupsState } from "../../../recoil/scrapBook/scrapState";
import usePopup from "../../../hooks/usePopup";

function ScrapedTripJournal() {
  const navigate = useNavigate();
  const journalGroups = useRecoilValue(scrapedJournalGroupsState);
  const { Popup, popupOpen, popupClose } = usePopup();
  const newFolderNameInputRef = useRef<HTMLInputElement>(null);

  const createNewFolder = () => {
    if (newFolderNameInputRef?.current) {
      if (newFolderNameInputRef.current.value.replace(" ", "") === "") {
        alert("그룹 이름을 입력해주세요.");
        return;
      } else {
        alert(newFolderNameInputRef.current.value);
        newFolderNameInputRef.current.value = "";
        popupClose();
      }
    }
  };

  return (
    <>
      <Popup>
        <S.PopupHeader>
          <S.PopupTitle>새 폴더 이름</S.PopupTitle>
          <S.SaveButton onClick={createNewFolder}>저장</S.SaveButton>
        </S.PopupHeader>
        <S.NewFolderNameInput type="text" ref={newFolderNameInputRef} />
      </Popup>
      <S.GroupList>
        <S.CreateNewGroupItem key={"createGroup"} background={addCircle}>
          <div
            onClick={() => {
              popupOpen();
            }}
          ></div>
          <p>새 그룹 만들기</p>
        </S.CreateNewGroupItem>
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
      </S.GroupList>
    </>
  );
}

export default ScrapedTripJournal;
