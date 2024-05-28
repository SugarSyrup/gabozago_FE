import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import BookMarkIcon from "../../../assets/icons/bookmark.svg?react";
import Typography from "../../common/Typography";

import * as S from "./style";
import useScrapModal from "../../video/useScrapModal";
import { post } from "../../../utils/api";

interface Props {
    id: number,
    title: string,
    desc: string,
    thumbnailURL: string,
    isBookmarked: boolean;
}

function ArticleItem({id, title, desc, thumbnailURL, isBookmarked}: Props) {
    const navigate = useNavigate()
    const ContainerRef = useRef<HTMLDivElement>(null);
    const [opacity, setOpacity] = useState(0.3);
    const {ScrapModal, scrapModalOpen, scrapModalClose} = useScrapModal({
        id: Number(id),
        type: "article"
    });

    useEffect(() => {
        if(!ContainerRef.current) return;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                let entryIntersectionRatio = Math.floor(entry.intersectionRatio * 100 ) / 100;
                if(entryIntersectionRatio >= 0.65) {
                    setOpacity(1);
                } else if(entryIntersectionRatio <= 0.35) {
                    setOpacity(0.3);
                } else {
                    setOpacity(entryIntersectionRatio);
                }
            })
        }, {
            threshold: [0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7]
        });
        observer.observe(ContainerRef.current);
    }, []);

    return (
        <>
            <ScrapModal />
            <S.ArticleItem opacity={opacity} ref={ContainerRef}>
                <S.ThumbnailWrapper>
                    <S.Thumbnail src={thumbnailURL} onClick={() => {navigate(`/article/${id}`)}} />
                    <S.BookMarkWrapper isBookmark={isBookmarked} onClick={() => {
                        if(isBookmarked) {
                            post<{ message: "Create Success" | "Delete Success" }>(`/folder/scrap/community`, {
                                community: "article",
                                postId: id
                            }).then(() => {
                                window.location.reload();
                            });
                        }
                        else {
                            if(localStorage.getItem("access_token")) {
                                scrapModalOpen();
                            }
                        }
                    }}>
                        <BookMarkIcon/>
                    </S.BookMarkWrapper>
                </S.ThumbnailWrapper>
                <div  onClick={() => {navigate(`/article/${id}`)}} >
                    <Typography.Headline size="sm" noOfLine={2}>{title}</Typography.Headline>
                    <Typography.Title size="md" color="#A6A6A6">{desc}</Typography.Title>
                </div>
                <Typography.Title size="sm" color="#5276FA">by. 가보자고</Typography.Title>
            </S.ArticleItem>        
        </>
    )
}

export default ArticleItem;