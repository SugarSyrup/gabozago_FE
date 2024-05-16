import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import BookMarkIcon from "../../../assets/icons/bookmark.svg?react";
import Typography from "../../common/Typography";

import * as S from "./style";

interface Props {
    id: number,
    title: string,
    desc: string,
}

function ArticleItem({id, title, desc}: Props) {
    const navigate = useNavigate()
    const ContainerRef = useRef<HTMLDivElement>(null);
    const [opacity, setOpacity] = useState(0.3);

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
    });

    return (
        <>
            <S.ArticleItem opacity={opacity} ref={ContainerRef} onClick={() => {navigate(`/article/${id}`)}}>
                <S.ThumbnailWrapper>
                    <S.Thumbnail />
                    <BookMarkIcon />
                </S.ThumbnailWrapper>
                <div>
                    <Typography.Headline size="sm" noOfLine={2}>{title}</Typography.Headline>
                    <Typography.Title size="md" color="#A6A6A6">{desc}</Typography.Title>
                </div>
                <Typography.Title size="sm" color="#5276FA">by. 가보자고</Typography.Title>
            </S.ArticleItem>        
        </>
    )
}

export default ArticleItem;


// TODO : 아티클 아이디 Bookmark 
// TOOD : 아티클 개별 페이지 라우팅
// TODO : 아티클 내부 UI 수정사항 있으면 반영