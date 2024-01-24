import Heading from "../common/Heading";
import * as S from "../../styles/schedule/ScheduleContent.style";
import BookMarkBtn from "./BookMarkBtn";

interface Props {
    imgURL: string;
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
                <img src={imgURL} alt={heading}></img>
            </S.ImgWrapper>
            <Heading size="xs" maxWidth={164} noOfLine={1}>
                {heading}
            </Heading>
            <S.Content>{content}</S.Content>
        </S.Container>
    );
}

export default ScheduleContent;
