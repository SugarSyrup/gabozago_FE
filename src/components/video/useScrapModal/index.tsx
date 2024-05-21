import { useEffect, useRef, useState } from "react";

import LogoSmallIcon from "../../../assets/icons/logo_small.svg?react";

import useModal from "../../../hooks/useModal";
import ScrapIcon from "../../../assets/icons/bookmark_filled.svg?react";
import ScrapBorderIcon from "../../../assets/icons/bookmark.svg?react";

import Typography from "../../common/Typography";
import * as S from "./style";
import { get, post } from "../../../utils/api";
import usePopup from "../../../hooks/usePopup";

type TScrapFolder = {
    id: number,
    name: string,
    status: boolean,
}

interface Props {
    id: number,
    type: "short-form" | "article"
}

function useScrapModal({id, type}: Props) {
    const [scrapFolderData, setScrapFolderData] = useState<TScrapFolder[]>([]);
    const [isScrapCreate, setIsScrapCreate] = useState<boolean>(false);
    const {Modal, modalOpen, modalClose} = useModal({
        title: "",
        handle: true,
        borderRadius: "30px",
    });
    const {Popup, popupOpen, popupClose} = usePopup();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        get<{
            status: boolean,
            folder: TScrapFolder[]
        }>(`/folder/scrap/community/${type}/${id}`)
            .then((response) => {
                setScrapFolderData(response.data.folder);
            })
    }, [])

    function ScrapModal() {
        return(
            <S.ModalWrapper>
                <Modal>
                    <S.CourseModalContainer>
                        <S.ScrapModalHeader>
                            <S.HeaderLeftItems>
                                <S.TravelThumbnailWrapper>
                                    <LogoSmallIcon />
                                </S.TravelThumbnailWrapper>
                                <Typography.Title size="lg">
                                    {
                                        type === "short-form" ? "숏폼이 저장됨" : "아티클이 저장됨"
                                    }
                                </Typography.Title>
                            </S.HeaderLeftItems>
                            <ScrapIcon />
                        </S.ScrapModalHeader>
                        <S.SeperateLine />
                        <S.TravelList>
                            <S.TravelListHeader>
                                <Typography.Title size="md">내 폴더</Typography.Title>
                                <S.TravelCreate onClick={() => {
                                    popupOpen();
                                    setIsScrapCreate(true);
                                }}>
                                    <Typography.Title size="md" color="inherit">새 폴더 생성</Typography.Title>
                                </S.TravelCreate>
                            </S.TravelListHeader>
                            {
                                scrapFolderData.map((folder) => 
                                    <S.TravelItem>
                                        <S.TravelInfoContainer>
                                            <S.TravelThumbnailWrapper>
                                                <LogoSmallIcon />
                                            </S.TravelThumbnailWrapper>
                                            <S.TravelInfoTextContainer>
                                                <Typography.Title size="sm">{folder.name}</Typography.Title>
                                            </S.TravelInfoTextContainer>
                                        </S.TravelInfoContainer>
                                        <S.TravelAddBtn onClick={() => {
                                            post<{message : "Create Success" | "Delete Success"}>('/folder/scrap/community', {
                                                community: type,
                                                postId: id,
                                                scrapFolderId: folder.id
                                            }).then((response) => {
                                                if(response.data.message === "Create Success")  {
                                                    folder.status = true;
                                                } else {
                                                    folder.status = false;
                                                }
                                            })
                                        }} isClicked={folder.status}>
                                            <ScrapBorderIcon />
                                        </S.TravelAddBtn>
                                    </S.TravelItem>
                                )
                            }   
                        </S.TravelList>
                    </S.CourseModalContainer>
                </Modal>


                <S.CreateScrapFolder isOpen={isScrapCreate}>
                    <Popup>
                        <S.CreateScrapFolderContainer>
                            <S.CreateScrapHeader>
                                <Typography.Title size="sm">새 폴더 이름</Typography.Title>
                                <S.SaveText onClick={() => {
                                    post<{
                                        id: number,
                                        name: string,
                                    }>('/folder/community', {
                                        name: inputRef.current?.value
                                    }).then((response) => {
                                        setScrapFolderData(prev => [...prev, {
                                            id: response.data.id,
                                            name: response.data.name,
                                            status: false
                                        }])
                                        setIsScrapCreate(false);
                                        popupClose();
                                    })
                                }}>
                                    <Typography.Title size="sm" color="inherit">저장</Typography.Title>
                                </S.SaveText>
                            </S.CreateScrapHeader>
                            <input type="text" ref={inputRef} maxLength={30}/>
                        </S.CreateScrapFolderContainer>
                    </Popup>                    
                </S.CreateScrapFolder>
            </S.ModalWrapper>
        )
    }

    return {ScrapModal, scrapModalOpen : modalOpen, scrapModalClose : modalClose};
}

export default useScrapModal;