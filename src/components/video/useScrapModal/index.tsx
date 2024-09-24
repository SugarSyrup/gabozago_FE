import { useEffect, useRef, useState } from 'react';

import LogoSmallIcon from '../../../assets/icons/logo_small.svg?react';

import useModal from '../../../hooks/useModal';
import ScrapIcon from '../../../assets/icons/bookmark_filled.svg?react';
import ScrapBorderIcon from '../../../assets/icons/bookmark.svg?react';

import Typography from '../../common/Typography';
import * as S from './style';
import { get, post } from '@_utils/api';
import usePopup from '../../../hooks/usePopup';
import { useSetRecoilState } from 'recoil';
import { popupValue } from '@_recoil/common/PopupValue';

type TScrapFolder = {
  id: number;
  name: string;
  status: boolean;
};

interface Props {
  id: number;
  type: 'short-form' | 'article';
  setIsScraped?: () => void;
}

function useScrapModal({ id, type, setIsScraped }: Props) {
  const [scrapFolderData, setScrapFolderData] = useState<TScrapFolder[]>([]);
  const [isUserScraped, setIsUserScraped] = useState<boolean>(true);
  const { Modal, modalOpen, modalClose, isOpend } = useModal({
    title: '',
    handle: true,
    borderRadius: '30px',
  });

  const getFolders = async () => {
    get<{
      status: boolean;
      folder: TScrapFolder[];
    }>(`/folder/scrap/community/${type}/${id}`).then((response) => {
      setScrapFolderData(response.data.folder);
    });
  };

  useEffect(() => {
    if (isOpend) {
      getFolders();
      setIsUserScraped(true);
    }
  }, [isOpend]);

  function ScrapModal() {
    const { popupOpen, popupClose } = usePopup();
    const setPopupUI = useSetRecoilState(popupValue);

    return (
      <>
        <Modal>
          <S.CourseModalContainer>
            <S.ScrapModalHeader>
              <S.HeaderLeftItems>
                <S.TravelThumbnailWrapper>
                  <LogoSmallIcon />
                </S.TravelThumbnailWrapper>
                <Typography.Title size="lg">
                  {type === 'short-form' ? '숏폼이 저장됨' : '아티클이 저장됨'}
                </Typography.Title>
              </S.HeaderLeftItems>
              <S.ScrapIconWrapper
                isScraped={isUserScraped}
                onClick={() => {
                  post<{ message: 'Create Success' | 'Delete Success' }>(
                    '/folder/scrap/community',
                    {
                      community: type,
                      postId: id,
                    },
                  ).then((response) => {
                    if (isUserScraped) {
                      setScrapFolderData((prev) =>
                        prev.map((folder) => ({
                          ...folder,
                          status: false,
                        })),
                      );
                    }

                    if (setIsScraped) {
                      setIsScraped();
                    }
                    setIsUserScraped((prev) => !prev);

                    if (response.data.message === 'Delete Success') {
                      modalClose();
                    }
                  });
                }}
              >
                <ScrapIcon />
              </S.ScrapIconWrapper>
            </S.ScrapModalHeader>
            <S.SeperateLine />
            <S.TravelListHeader>
              <Typography.Title size="md">내 폴더</Typography.Title>
              <S.TravelCreate
                onClick={() => {
                  setPopupUI({
                    Custom: (
                      <form
                        style={{
                          width: '100%',
                        }}
                        onSubmit={(e) => {
                          e.preventDefault();

                          const formData = new FormData(e.currentTarget);
                          post<{ id: number; name: string }>('folder/community', {
                            name: formData.get('newFolderName'),
                          }).then((response) => {
                            setScrapFolderData((prev) => [
                              ...prev,
                              {
                                id: response.data.id,
                                name: response.data.name,
                                status: false,
                              },
                            ]);
                            popupClose();
                          });
                        }}
                      >
                        <S.Header>
                          <S.Title>새 폴더 이름</S.Title>
                          <S.SaveButton type="submit">저장</S.SaveButton>
                        </S.Header>
                        <S.Input
                          type="text"
                          name="newFolderName"
                          maxLength={38}
                          minLength={1}
                          required
                        />
                      </form>
                    ),
                  });
                  popupOpen();
                }}
              >
                <Typography.Title size="md" color="inherit">
                  새 폴더 생성
                </Typography.Title>
              </S.TravelCreate>
            </S.TravelListHeader>
            <S.TravelList>
              {scrapFolderData.map((folder, index) => (
                <S.TravelItem key={folder.id}>
                  <S.TravelInfoContainer>
                    <S.TravelThumbnailWrapper>
                      <LogoSmallIcon />
                    </S.TravelThumbnailWrapper>
                    <S.TravelInfoTextContainer>
                      <Typography.Title size="sm">{folder.name}</Typography.Title>
                    </S.TravelInfoTextContainer>
                  </S.TravelInfoContainer>
                  <S.TravelAddBtn
                    onClick={() => {
                      post<{ message: 'Create Success' | 'Delete Success' }>(
                        '/folder/scrap/community',
                        {
                          community: type,
                          postId: id,
                          scrapFolderId: folder.id,
                        },
                      ).then((response) => {
                        if (response.data.message === 'Create Success') {
                          setScrapFolderData((prev) => {
                            const temp = [...prev];
                            temp[index].status = true;

                            return temp;
                          });
                        } else {
                          setScrapFolderData((prev) => {
                            const temp = [...prev];
                            temp[index].status = false;

                            return temp;
                          });
                        }
                      });
                    }}
                    isClicked={folder.status}
                  >
                    {folder.status ? <ScrapIcon /> : <ScrapBorderIcon />}
                  </S.TravelAddBtn>
                </S.TravelItem>
              ))}
            </S.TravelList>
          </S.CourseModalContainer>
        </Modal>
      </>
    );
  }

  return { ScrapModal, scrapModalOpen: modalOpen, scrapModalClose: modalClose };
}

export default useScrapModal;
