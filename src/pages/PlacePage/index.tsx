import { useRef } from "react";

import LocationIcon from "../../assets/icons/location.svg?react";
import PhoneIcon from "../../assets/icons/phone.svg?react";
import TimeIcon from "../../assets/icons/clock.svg?react";
import LinkIcon from "../../assets/icons/web.svg?react";
import CalendarAddIcon from "../../assets/icons/calendar_add_border.svg?react";
import ScrapIcon from "../../assets/icons/bookmark.svg?react"

import BackButton from "../../components/common/BackButton";
import PageHeader from "../../components/common/PageHeader";
import PageTemplate from "../../components/common/PageTemplate";
import PlaceOperateTime from "../../components/journal/PlaceOperateTime";
import useScrapModal from "../../components/video/useScrapModal";
import useCourseModal from "../../components/video/useCourseModal";

import * as S from "./style";
import PlaceGoogleMap from "../../components/journal/GoogleMap";
import Typography from "../../components/common/Typography";



const data = {
    "region": "부산",
    "name": "174센치한남",
    "theme": "술집",
    "address": "부산광역시 중구 광복중앙로 22",
    "number": "051-255-0174",
    "opening_hours": "월요일: 오후 5:00 ~ 오전 2:00\n화요일: 오후 5:00 ~ 오전 2:00\n수요일: 오후 5:00 ~ 오전 2:00\n목요일: 오후 5:00 ~ 오전 2:00\n금요일: 오후 5:00 ~ 오전 2:00\n토요일: 오후 5:00 ~ 오전 2:00\n일요일: 오후 5:00 ~ 오전 2:00",
    "website": "",
    "image": []
}

function PlacePage() {
    const thumbnailWrapperRef = useRef<HTMLDivElement>(null);
    const {CourseModal, courseModalOpen, courseModalClose, setCourseModalData} = useCourseModal();
    const {ScrapModal, scrapModalOpen, scrapModalClose, setScrapModalData} = useScrapModal();

    // useEffect(() => {
    //     get(`${import.meta.env.BASE_URL}place/1`)
    //         .then((response) => {console.log(response)});
    // }, [])

    return(
        <PageTemplate header={<PageHeader LeftItem={<BackButton />}><S.TopBarText>모구모구 제과점</S.TopBarText></PageHeader>} nav={false}>
            <CourseModal />
            <ScrapModal />
            <S.ThumbnailWrapper ref={thumbnailWrapperRef}>
                {
                    data.image.length === 0 ?
                    <></>
                    :
                    data.image.map((img) => <img src={img} />)
                }
            </S.ThumbnailWrapper>
            <S.ThumbnailEmpty padding={thumbnailWrapperRef.current?.offsetHeight}/>
            <S.InfomationList>
                <S.InfomationItem>
                    <LocationIcon />
                    <S.InfomationText>{data.address}</S.InfomationText>
                </S.InfomationItem>
                <S.InfomationItem>
                    <PhoneIcon />
                    <S.InfomationText>{data.number}</S.InfomationText>
                </S.InfomationItem>
                <S.InfomationItem>
                    <TimeIcon />
                    <PlaceOperateTime opening_hours={data.opening_hours}/>
                </S.InfomationItem>
                <S.InfomationItem>
                    <LinkIcon />
                    <S.InfomationLink to={data.website}>인스타그램</S.InfomationLink>
                </S.InfomationItem>
            </S.InfomationList>
            <PlaceGoogleMap
                height="270px"
                center={{
                    lat: 37,
                    lng: 126
                }} markers={[{
                    lat: 37,
                    lng: 126
                }]}
            />
            <S.Buttons>
                <S.Button onClick={() => courseModalOpen()}>
                    <CalendarAddIcon />
                    <Typography.Label size="lg">내 일정에 추가하기</Typography.Label>
                </S.Button>
                <S.Button onClick={() => scrapModalOpen()}>
                    <ScrapIcon />
                    <Typography.Label size="lg">장소 스크랩에 저장</Typography.Label>
                </S.Button>
            </S.Buttons>
        </PageTemplate>
    )
}

export default PlacePage;