import * as S from "./style";
import { FormEvent, MouseEvent, memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import addCircle from "../../../assets/icons/add_circle.svg";
import KebabMenuIcon from "../../../assets/icons/menu_kebab.svg?react";
import EditIcon from "../../../assets/icons/edit.svg?react";
import DeleteIcon from "../../../assets/icons/delete.svg?react";
import { deletes, get, patch, post } from "../../../utils/api";
import useTextInputPopup from "../../../hooks/useTextInputPopup";
import useModal from "../../../hooks/useModal";
import MenuOptionList from "../../common/MenuOptionList";

interface GroupInfo {
  id: number;
  name: string;
  thumbnail?: string;
}

const ScrapedTripJournal = memo(function ScrapedTripJournal() {
  const navigate = useNavigate();
  const [editingFolderName, setEditingFolderName] = useState<string>("");
  const {
    Modal: SettingsModal,
    modalOpen: settingsModalOpen,
    modalClose: settingsModalClose,
    isOpend: isSettingsModalOpend,
  } = useModal({});
  const {
    TextInputPopup: CreateFolderPopup,
    textInputPopupOpen: createPopupOpen,
    textInputPopupClose: createPopupClose,
    isOpend: isCreatePopupOpend,
  } = useTextInputPopup("새 폴더 추가", 20);
  const {
    TextInputPopup: EditFolderPopup,
    textInputPopupOpen: editPopupOpen,
    textInputPopupClose: editPopupClose,
    isOpend: isEditPopupOpend,
  } = useTextInputPopup("폴더 이름", 20, editingFolderName);
  const [groupList, setGroupList] = useState<GroupInfo[]>([]);
  const [targetGroupIndex, setTargetGroupIndex] = useState<number>(0);

  /* === 케밥 메뉴 시작 ===*/
  const handleMenuButtonClick = (e: MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setTargetGroupIndex(index);
    settingsModalOpen();
  };
  const handleFolderEditClick = () => {
    settingsModalClose();
    setEditingFolderName(groupList[targetGroupIndex].name);

    editPopupOpen();
  };
  const handleDeleteFolderClick = () => {
    settingsModalClose();
    // @todo: 폴더 삭제 alert 창 띄움
  };
  const settingMenus = [
    {
      icon: <EditIcon />,
      name: "폴더 이름 수정하기",
      onClick: handleFolderEditClick,
    },
    {
      icon: <DeleteIcon />,
      name: "폴더 삭제하기",
      onClick: handleDeleteFolderClick,
    },
  ];
  /* === 케밥 메뉴 끝 === */

  const authCheck = () => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      alert("로그인이 필요합니다.");
      return false;
    } else {
      return true;
    }
  };
  // 콘텐츠 그룹 목록 불러오기
  const getGroupList = async () => {
    if (authCheck() === false) {
      return;
    }
    const { data } = await get<GroupInfo[]>(`folder/community`);
    setGroupList(data);

    return;
  };
  // 새 폴더 생성
  const createNewFolder = async (name: string) => {
    if (authCheck() === false) {
      return;
    }
    if (!name || name === "") {
      alert("폴더 이름을 입력해주세요.");
      return;
    }

    await post<GroupInfo>(`folder/community`, {
      name: name,
    });
    getGroupList();

    createPopupClose();

    return;
  };
  // 폴더 이름 수정
  const editFolderName = async (id: number, name: string) => {
    if (authCheck() === false) {
      return;
    }
    if (!name || name === "") {
      alert("폴더 이름을 입력해주세요.");
      return;
    }
    const { data } = await patch<{ message: string }>(`folder/community`, {
      id: id,
      name: name,
    });
    if (data.message === "PATCH SUCCESS") {
      getGroupList();
      editPopupClose();
    } else {
      alert("수정에 실패하였습니다.");
    }

    return;
  };
  // 폴더 삭제
  const deleteFolder = async (id: number) => {
    if (authCheck() === false) {
      return;
    }
    const { data } = await deletes<{ message: string }>(`folder/community`, {
      id: id,
    });
    if (data.message === "DELETE SUCCESS") {
      getGroupList();
    } else {
      alert("삭제에 실패하였습니다.");
    }

    return;
  };

  useEffect(() => {
    getGroupList();
  }, []);

  return (
    <>
      <S.ModalWrapper
        isOpen={isSettingsModalOpend || isCreatePopupOpend || isEditPopupOpend}
      >
        <SettingsModal>
          <MenuOptionList menus={settingMenus} />
        </SettingsModal>
        <CreateFolderPopup
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            const formData = new FormData(e.currentTarget);
            console.log(formData.get("새 폴더 추가"));
            createNewFolder(String(formData.get("새 폴더 추가")));
          }}
        />
        <EditFolderPopup
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            const formData = new FormData(e.currentTarget);
            console.log(formData.get("폴더 이름"));
            console.log(groupList[targetGroupIndex]);
            editFolderName(
              groupList[targetGroupIndex].id,
              String(formData.get("폴더 이름"))
            );
          }}
        />
      </S.ModalWrapper>
      <S.GroupList>
        <S.CreateNewGroupItem key={"createGroup"} background={addCircle}>
          <div
            onClick={() => {
              createPopupOpen();
            }}
          ></div>
          <p>새 폴더 추가</p>
        </S.CreateNewGroupItem>
        <S.GroupItem
          key={0}
          background={""}
          onClick={() => {
            navigate(`./all`);
          }}
        >
          <div></div>
          <p>모든 게시물</p>
        </S.GroupItem>
        {groupList.map(({ id, name, thumbnail }, index) => (
          <S.GroupItem
            key={id}
            background={thumbnail ? thumbnail : ""}
            onClick={() => {
              navigate(`./${id}`);
            }}
          >
            <div></div>
            <p>{name}</p>
            <S.MenuButton
              type="button"
              onClick={(e) => {
                handleMenuButtonClick(e, index);
              }}
            >
              <KebabMenuIcon />
            </S.MenuButton>
          </S.GroupItem>
        ))}
      </S.GroupList>
    </>
  );
});

export default ScrapedTripJournal;
