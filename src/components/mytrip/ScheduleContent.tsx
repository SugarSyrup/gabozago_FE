import * as S from "../../styles/mytrip/ScheduleContent.style";
import ImageIcon from "../../assets/icons/image.svg?react";

import Heading from "../common/Heading";

import BookMarkBtn from "./BookMarkBtn";

interface Props {
    imgURL?: string;
    heading: string;
    content: string;
    currentBookMarked: boolean;
}
function ScheduleContent({
    imgURL,
    heading,
    content,
    currentBookMarked,
}: Props) {
    function onBookMarkClickHandler() {}

    return (
        <S.Container>
            <S.ImgWrapper>
                <S.BookMarkWrapper>
                    <BookMarkBtn
                        currentBookMarked={currentBookMarked}
                        onClick={onBookMarkClickHandler}
                    />
                </S.BookMarkWrapper>
                {
                    imgURL ? 
                    <img src={imgURL} alt={heading} loading="lazy" decoding="async" />
                    :
                    <ImageIcon width={62} height={62}/>
                }
            </S.ImgWrapper>
            <Heading size="xs" maxWidth={164} noOfLine={1}>
                {heading}
            </Heading>
            <S.Content>{content}</S.Content>
        </S.Container>
    );
}

export default ScheduleContent;
