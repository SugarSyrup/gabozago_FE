import { FormEvent, MouseEvent, memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import addCircle from '../../../assets/icons/add_circle.svg';
import KebabMenuIcon from '../../../assets/icons/menu_kebab.svg?react';
import EditIcon from '../../../assets/icons/edit.svg?react';
import DeleteIcon from '../../../assets/icons/delete.svg?react';
import { deletes, get, patch, post } from '@_utils/api';
import useModal from '../../../hooks/useModal';
import MenuOptionList from '../../common/MenuOptionList';
import useConfirm from '../../../hooks/useConfirm';
import Typography from '../../common/Typography';
import { useSetRecoilState } from 'recoil';
import { popupValue } from '@_recoil/common/PopupValue';
import usePopup from '../../../hooks/usePopup';
import ImportantIcom from '@_icons/exclamation_circle.svg?react';

interface GroupInfo {
  id: number;
  name: string;
  thumbnailURL: string;
}

function ScrapedTripJournal() {
  const navigate = useNavigate();
  const [editingFolderName, setEditingFolderName] = useState<string>('');
  const { popupOpen, popupClose } = usePopup();
  const setPopupUI = useSetRecoilState(popupValue);

  const {
    Modal: SettingsModal,
    modalOpen: settingsModalOpen,
    modalClose: settingsModalClose,
    isOpend: isSettingsModalOpend,
  } = useModal({});

  const [groupList, setGroupList] = useState<GroupInfo[]>([]);
  const [targetGroupIndex, setTargetGroupIndex] = useState<number>(0);

  /* === 케밥 메뉴 시작 === */
  const handleMenuButtonClick = (e: MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setTargetGroupIndex(index);
    settingsModalOpen();
  };
  const handleFolderEditClick = () => {
    settingsModalClose();
    setEditingFolderName(groupList[targetGroupIndex].name);

    setPopupUI({
      Custom: (
        <form
          style={{
            width: '100%',
          }}
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            const formData = new FormData(e.currentTarget);
            editFolderName(groupList[targetGroupIndex].id, String(formData.get('폴더 이름 수정')));

            popupClose();
          }}
        >
          <S.PopupHeader>
            <S.PopupTitle>폴더 이름 수정</S.PopupTitle>
            <S.PopupSaveButton type="submit">저장</S.PopupSaveButton>
          </S.PopupHeader>
          <S.PopupInput
            type="text"
            name="폴더 이름 수정"
            maxLength={25}
            defaultValue={groupList[targetGroupIndex].name}
          />
        </form>
      ),
    });
    popupOpen();
  };

  const handleDeleteFolderClick = () => {
    settingsModalClose();
    setPopupUI({
      Icon: <ImportantIcom />,
      Header: '폴더를 삭제하시겠어요?',
      Description: `폴더를 삭제하면, 폴더 안에 스크랩된
콘텐츠도 모두 삭제 돼요.`,
      ConfirmButton: {
        text: '네, 삭제할게요',
        onClick: () => {
          deleteFolder(groupList[targetGroupIndex].id);
          window.location.reload();
        },
      },
      CloseButton: {
        text: '아니요',
        onClick: () => {
          popupClose();
        },
      },
    });
    popupOpen();
  };
  const settingMenus = [
    {
      icon: <EditIcon />,
      name: '폴더 이름 수정하기',
      onClick: handleFolderEditClick,
    },
    {
      icon: <DeleteIcon />,
      name: '폴더 삭제하기',
      onClick: handleDeleteFolderClick,
    },
  ];
  /* === 케밥 메뉴 끝 === */

  // 콘텐츠 그룹 목록 불러오기
  const getGroupList = async () => {
    const { data } = await get<GroupInfo[]>('folder/community');
    setGroupList(data);
  };
  // 새 폴더 생성
  const createNewFolder = async (name: string) => {
    if (!name || name === '') {
      alert('폴더 이름을 입력해주세요.');
      return;
    }

    await post<GroupInfo>('folder/community', {
      name,
    });
    getGroupList();

    popupClose();
  };

  // 폴더 이름 수정
  const editFolderName = async (id: number, name: string) => {
    if (!name || name === '') {
      alert('폴더 이름을 입력해주세요.');
      return;
    }
    const { data } = await patch<{ message: string }>('folder/community', {
      id,
      name,
    });

    if (data.message === 'PATCH SUCCESS') {
      getGroupList();
    } else {
      alert('수정에 실패하였습니다.');
    }
  };

  // 폴더 삭제
  const deleteFolder = async (id: number) => {
    const { data } = await deletes<{ message: string }>('folder/community', {
      id,
    });
    if (data.message === 'DELETE SUCCESS') {
      getGroupList();
      popupClose();
    } else {
      alert('삭제에 실패하였습니다.');
    }
  };

  useEffect(() => {
    getGroupList();
  }, []);

  return (
    <>
      <S.ModalWrapper isOpen={isSettingsModalOpend}>
        <SettingsModal>
          <MenuOptionList menus={settingMenus} />
        </SettingsModal>
      </S.ModalWrapper>

      <S.GroupList>
        <S.CreateNewGroupItem key="createGroup" background={addCircle}>
          <div
            onClick={() => {
              setPopupUI({
                Custom: (
                  <form
                    style={{
                      width: '100%',
                    }}
                    onSubmit={(e: FormEvent<HTMLFormElement>) => {
                      e.preventDefault();

                      const formData = new FormData(e.currentTarget);
                      createNewFolder(String(formData.get('새 폴더 추가')));
                      popupClose();
                    }}
                  >
                    <S.PopupHeader>
                      <S.PopupTitle>새 폴더 추가</S.PopupTitle>
                      <S.PopupSaveButton type="submit">저장</S.PopupSaveButton>
                    </S.PopupHeader>
                    <S.PopupInput type="text" name="새 폴더 추가" maxLength={38} />
                  </form>
                ),
              });
              popupOpen();
            }}
          />
          <p>새 폴더 추가</p>
        </S.CreateNewGroupItem>
        <S.GroupItem
          key={0}
          background={groupList[0]?.thumbnailURL || ''}
          onClick={() => {
            navigate('./all');
          }}
        >
          <div />
          <p>모든 게시물</p>
        </S.GroupItem>
        {groupList.splice(1).map(({ id, name, thumbnailURL }, index) => (
          <S.GroupItem
            key={id}
            background={thumbnailURL || ''}
            onClick={() => {
              navigate(`./${id}?name=${name}`);
            }}
          >
            <div />
            <p>
              <Typography.Title size="sm" noOfLine={2}>
                {name}
              </Typography.Title>
              <S.MenuButton
                type="button"
                onClick={(e) => {
                  handleMenuButtonClick(e, index);
                }}
              >
                <KebabMenuIcon />
              </S.MenuButton>
            </p>
          </S.GroupItem>
        ))}
      </S.GroupList>
    </>
  );
}

export default ScrapedTripJournal;
