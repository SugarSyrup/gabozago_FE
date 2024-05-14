import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import LocationIcon from "../../assets/icons/location.svg?react";
import PhoneIcon from "../../assets/icons/phone.svg?react";
import TimeIcon from "../../assets/icons/clock.svg?react";
import LinkIcon from "../../assets/icons/web.svg?react";
import CalendarAddIcon from "../../assets/icons/calendar_add_border.svg?react";
import ScrapIcon from "../../assets/icons/bookmark.svg?react"
import PlusIcon from "../../assets/icons/plus_circle_blue.svg?react";

import BackButton from "../../components/common/BackButton";
import PageHeader from "../../components/common/PageHeader";
import PageTemplate from "../../components/common/PageTemplate";
import Typography from "../../components/common/Typography";
import PlaceOperateTime from "../../components/journal/PlaceOperateTime";
import useScrapModal from "../../components/video/useScrapModal";
import useCourseModal from "../../components/video/useCourseModal";
import PlaceGoogleMap from "../../components/journal/GoogleMap";
import { get, post } from "../../utils/api";

import * as S from "./style";

type TData = {
    region: string,
    name: string,
    theme: string,
    address: string,
    number: string,
    opening_hours: string,
    website: string,
    image: string[],
    latitude: number,
    longitude: number,
}


function PlacePage() {
    const {id} = useParams();
    const [data, setData] = useState<TData>();
    const [imageURL, setImageURL] = useState<string>("");
    const {CourseModal, courseModalOpen, courseModalClose, setCourseModalData} = useCourseModal({id: Number(id)});
    const {ScrapModal, scrapModalOpen, scrapModalClose, setScrapModalData} = useScrapModal({id: Number(id)});

    useEffect(() => {
        get<TData>(`${import.meta.env.VITE_BASE_URL}/place/${id}`)
            .then((response) => {
                setData(response.data)
            });
    }, [])

    return(
        <PageTemplate header={<PageHeader LeftItem={<BackButton />}><S.TopBarText>{data && data.name}</S.TopBarText></PageHeader>} nav={false}>
            {
                data !== undefined && 
                <S.ContentContainer>
                    <CourseModal />
                    <ScrapModal />
                    {
                        data.image.length === 0 && imageURL === ""?
                        <S.ImgRegistContainer>
                            <label htmlFor="placeImgRegist">
                                <PlusIcon/>
                            </label>
                            <input id="placeImgRegist" type="file" accept="image/*" onInput={(e) => {
                                if(e.currentTarget.files){
                                    const file = e.currentTarget.files[0];
                                    const reader = new FileReader();
                      
                                    reader.readAsDataURL(file);
                                    reader.onloadend = () => {
                                      setImageURL(reader.result as string);
                                    }

                                    const reqData = new FormData();
                                    reqData.append('placeId', id as string);
                                    reqData.append('image', e.currentTarget.value);

                                    // [SugarSyrup] @TODO: 해당 이미지 등록하는 부분 백엔드 미 배포로 테스트 불가
                                    post(`${import.meta.env.VITE_BASE_URL}/place/image`, reqData, {
                                        headers: {
                                            "Content-Type":"multipart/form-data"
                                        }
                                    })
                                }
                            }} />
                            <Typography.Title size="md" color="inherit">이 장소의 첫 번째 사진을 등록해주세요!</Typography.Title>
                        </S.ImgRegistContainer>
                        :
                        <S.ImgSlider>
                            {data.image.map((img) => <img src={img} />)}
                        </S.ImgSlider>
                    }
                    {imageURL && <img src={imageURL} />}
                    <S.ContentList>
                        <S.InfomationList>
                            <S.InfomationItem>
                                <LocationIcon />
                                <S.InfomationText>{data.address}</S.InfomationText>
                            </S.InfomationItem>
                            <S.InfomationItem>
                                <PhoneIcon />
                                <S.InfomationText>{data.number}</S.InfomationText>
                            </S.InfomationItem>
                            { data.opening_hours !== "" &&
                                <S.InfomationItem>
                                    <TimeIcon />
                                    <PlaceOperateTime opening_hours={data.opening_hours}/>
                                </S.InfomationItem>
                            }
                            <S.InfomationItem>
                                <LinkIcon />
                                <S.InfomationLink to={data.website}>인스타그램</S.InfomationLink>
                            </S.InfomationItem>
                        </S.InfomationList>
                        {/* [SugarSyrup] @TODO: lat,lng 좌표 백엔드에서 받아오는 부분 아직 베포 안되서 test 진행 불가 */}
                        <PlaceGoogleMap
                            height="270px"
                            center={{
                                lat: data.latitude,
                                lng: data.longitude
                            }} markers={[{
                                lat: data.latitude,
                                lng: data.longitude
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
                    </S.ContentList>
                </S.ContentContainer>
            }
        </PageTemplate>
    )
}

export default PlacePage;