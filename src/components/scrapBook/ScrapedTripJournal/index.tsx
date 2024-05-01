import * as S from "./style";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import addCircle from "../../../assets/icons/add_circle.svg";
import usePopup from "../../../hooks/usePopup";
import { get, post } from "../../../utils/api";

interface GroupInfo {
  id: number;
  name: string;
  thumbnail?: string;
}

function ScrapedTripJournal() {
  const navigate = useNavigate();
  const { Popup, popupOpen, popupClose } = usePopup();
  const [groupList, setGroupList] = useState<GroupInfo[]>([
    { id: 0, name: "모든 게시물" },
  ]);
  const newFolderNameInputRef = useRef<HTMLInputElement>(null);

  // 새 폴더 생성
  const createNewFolder = async () => {
    const token = localStorage.getItem("access_token");

    /* === Validation 시작 === */
    if (!token) {
      alert("로그인이 필요합니다.");
      return;
    }
    if (!newFolderNameInputRef?.current) {
      return;
    }
    if (newFolderNameInputRef.current.value.replace(" ", "") === "") {
      alert("그룹 이름을 입력해주세요.");
      return;
    }
    /* === Validation 끝 === */

    const { data } = await post<GroupInfo>(
      `${import.meta.env.BASE_URL}folder/community`,
      { name: newFolderNameInputRef.current.value }
    );
    setGroupList((prev) => [...prev, data]);

    newFolderNameInputRef.current.value = ""; // 팝업 input 초기화
    popupClose();

    return;
  };

  // 콘텐츠 그룹 목록 불러오기
  const getGroupList = async () => {
    const token = localStorage.getItem("access_token");
    if (token) {
      const { data } = await get<GroupInfo[]>(
        `${import.meta.env.BASE_URL}folder/community`
      );
      console.log(data);
      setGroupList(data);

      return;
    }
  };

  useEffect(() => {
    getGroupList();
  }, []);

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

        {groupList.map(({ id, name, thumbnail }) => (
          <S.GroupItem
            key={id}
            background={thumbnail ? thumbnail : ""}
            onClick={() => {
              navigate(`./${id}`);
            }}
          >
            <div></div>
            <p>{name}</p>
          </S.GroupItem>
        ))}
      </S.GroupList>
    </>
  );
}

export default ScrapedTripJournal;
