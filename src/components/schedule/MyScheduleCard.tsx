import * as S from "../../styles/schedule/MyScheduleCard.style";
import Button from "../common/Button";
import LocationIcon from "../../assets/icons/location.svg?react";
import MeatballsMenuIcon from "../../assets/icons/meatballsMenu.svg?react";
import Heading from "../common/Heading";

interface Props {
    thumbnailURL?: string;
    title: string;
    startDate: string;
    endDate: string;
    places: string[];
}

function MyScheduleCard({
    thumbnailURL,
    title,
    startDate,
    endDate,
    places,
}: Props) {
    return (
        <S.Wrapper>
            <S.ScheduleInfoContainer>
                <S.ThumbnailWrapper>
                    {thumbnailURL && <img src={thumbnailURL} alt={title} />}
                </S.ThumbnailWrapper>
                <div>
                    <Heading size="sm" noOfLine={1} maxWidth={110}>
                        {title}
                    </Heading>
                    <S.Date>
                        {startDate} - {endDate}
                    </S.Date>
                </div>
                <S.MenuIcon>
                    <MeatballsMenuIcon />
                </S.MenuIcon>
            </S.ScheduleInfoContainer>
            <S.BottomContainer>
                <S.Places>
                    <LocationIcon />
                    {places.map((item) => (
                        <S.Place>{item}</S.Place>
                    ))}
                </S.Places>
                <Button size="sm" active={true} type="normal">
                    여행 수정하기
                </Button>
            </S.BottomContainer>
        </S.Wrapper>
    );
}

export default MyScheduleCard;
