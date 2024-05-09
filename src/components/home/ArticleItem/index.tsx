import { useRef, useState, useEffect } from "react";

import BookMarkIcon from "../../../assets/icons/bookmark.svg?react";
import Typography from "../../common/Typography";

import * as S from "./style";

interface Props {
    topic: string,
    title: string,
    desc: string,
    writer: string,
    date: string,
}

function ArticleItem({topic, title, desc, writer, date}: Props) {
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
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
        });
        observer.observe(ContainerRef.current);
    });

    return (
        <S.ArticleItem opacity={opacity} ref={ContainerRef}>
            <S.ThumbnailWrapper>
                <S.Thumbnail />
                <BookMarkIcon />
                <div>
                    <Typography.Title size="sm" color="white">{date}</Typography.Title>
                    <Typography.Headline size="lg" color="white">{topic}</Typography.Headline>
                </div>
            </S.ThumbnailWrapper>
            <div>
                <Typography.Headline size="sm" noOfLine={2}>{title}</Typography.Headline>
                <Typography.Title size="md">{desc}</Typography.Title>
            </div>
            <Typography.Title size="sm" color="#5276FA">by. {writer}</Typography.Title>
        </S.ArticleItem>        
    )
}

export default ArticleItem;