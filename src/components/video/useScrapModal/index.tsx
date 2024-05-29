import { useEffect, useRef, useState } from "react";

import LogoSmallIcon from "../../../assets/icons/logo_small.svg?react";

import useModal from "../../../hooks/useModal";
import ScrapIcon from "../../../assets/icons/bookmark_filled.svg?react";
import ScrapBorderIcon from "../../../assets/icons/bookmark.svg?react";

import Typography from "../../common/Typography";
import * as S from "./style";
import { get, post } from "../../../utils/api";
import usePopup from "../../../hooks/usePopup";
import useTextInputPopup from "../../../hooks/useTextInputPopup";

type TScrapFolder = {
  id: number;
  name: string;
  status: boolean;
};

interface Props {
  id: number;
  type: "short-form" | "article";
  setIsScraped?: () => void;
}

function useScrapModal({ id, type, setIsScraped }: Props) {
  const [scrapFolderData, setScrapFolderData] = useState<TScrapFolder[]>([]);
  const [isUserScraped, setIsUserScraped] = useState<boolean>(true);
  const { Modal, modalOpen, modalClose } = useModal({
    title: "",
    handle: true,
    borderRadius: "30px",
  });
  const {TextInputPopup,inputRef,textInputPopupOpen,textInputPopupClose} = useTextInputPopup("새 폴더 이름", 30);

  const getFolders = async () => {
    get<{
      status: boolean;
      folder: TScrapFolder[];
    }>(`/folder/scrap/community/${type}/${id}`).then((response) => {
      setScrapFolderData(response.data.folder);
    });
  };

  useEffect(() => {
    getFolders();
    setIsUserScraped(true);
  }, []);


  function ScrapModal() {

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
                  {type === "short-form" ? "숏폼이 저장됨" : "아티클이 저장됨"}
                </Typography.Title>
              </S.HeaderLeftItems>
              <S.ScrapIconWrapper isScraped={isUserScraped}  onClick={() => {
                  post<{ message: "Create Success" | "Delete Success" }>(`/folder/scrap/community`, {
                    community: "article",
                    postId: id
                  }).then(() => {  
                    if(isUserScraped) {
                      setScrapFolderData((prev) => {
                        return prev.map((folder) => {
                          return {
                            ...folder,
                            status: false,
                          };
                        });
                      });
                    }
                    
                    if(setIsScraped){
                      setIsScraped();
                    }
                    setIsUserScraped(prev => !prev);
                  });
                }}>
                <ScrapIcon />
              </S.ScrapIconWrapper>
            </S.ScrapModalHeader>
            <S.SeperateLine />
            <S.TravelListHeader>
              <Typography.Title size="md">내 폴더</Typography.Title>
              <S.TravelCreate
                onClick={() => {
                  textInputPopupOpen();
                }}
              >
                <Typography.Title size="md" color="inherit">
                  새 폴더 생성
                </Typography.Title>
              </S.TravelCreate>
            </S.TravelListHeader>
            <S.TravelList>
              {scrapFolderData.map((folder, index) => (
                <S.TravelItem>
                  <S.TravelInfoContainer>
                    <S.TravelThumbnailWrapper>
                      <LogoSmallIcon />
                    </S.TravelThumbnailWrapper>
                    <S.TravelInfoTextContainer>
                      <Typography.Title size="sm">
                        {folder.name}
                      </Typography.Title>
                    </S.TravelInfoTextContainer>
                  </S.TravelInfoContainer>
                  <S.TravelAddBtn
                    onClick={() => {
                      post<{ message: "Create Success" | "Delete Success" }>(
                        "/folder/scrap/community",
                        {
                          community: type,
                          postId: id,
                          scrapFolderId: folder.id,
                        }
                      ).then((response) => {
                        if (response.data.message === "Create Success") {
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
                    <ScrapBorderIcon />
                  </S.TravelAddBtn>
                </S.TravelItem>
              ))}
            </S.TravelList>
          </S.CourseModalContainer>
        </Modal>
        <TextInputPopup onSubmit={() => {
            post<{
              id: number;
              name: string;
            }>("/folder/community", {
              name: inputRef.current?.value,
            }).then((response) => {
              setScrapFolderData((prev) => [
                ...prev,
                {
                  id: response.data.id,
                  name: response.data.name,
                  status: false,
                },
              ]);
              textInputPopupClose();
            });
        }}/>
      </>
    );
  }

  return { ScrapModal, scrapModalOpen: modalOpen, scrapModalClose: modalClose };
}

export default useScrapModal;
