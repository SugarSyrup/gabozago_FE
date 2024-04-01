import AvatarIcon from "../../assets/icons/user.svg?react";
import CheckIcon from "../../assets/icons/check.svg?react";
import LocationIcon from "../../assets/icons/location.svg?react";
import CalendarAddFullIcon from "../../assets/icons/calendar_add.svg?react";
import CalendarAddIcon from "../../assets/icons/calendar_add_border.svg?react";
import ExclamationIcon from "../../assets/icons/exclamation_circle.svg?react";
import CalendarIcon from "../../assets/icons/calendar.svg?react";
import ScrapIcon from "../../assets/icons/bookmark_filled.svg?react";
import ScrapBorderIcon from "../../assets/icons/bookmark.svg?react";

import Summary from "../../components/post/Summary";
import Routes from "../../components/post/Routes";
import Place from "../../components/post/Place";

import * as S from "./style";
import Comment from "../../components/journal/Comment";
import { useNavigate } from "react-router-dom";
import useModal from "../../hooks/useModal";
import { useRef, useState } from "react";
import usePopup from "../../hooks/usePopup";
import useScrapAlert from "../../components/post/useScrapAlert";
import usePlaceAlert from "../../components/post/usePlaceAlert";
import CommunityPageTemplate from "../../components/common/CommunityPageTemplate";
import { data } from "../../assets/data/postData";

function PostPage() {
    const navigate = useNavigate();
    const [isScrapCreate, setIsScrapCreate] = useState<boolean>(false);
    const PlaceAlertTextRef = useRef<HTMLSpanElement>(null);
    const CourseModalTextRef = useRef<HTMLSpanElement>(null);


    const courseModal = useModal({
      title: "",
      handle: true,
      borderRadius: "30px",
    });

    const placeModal = useModal({
        title:"",
        handle: true,
        borderRadius: "30px"
    })

    const scrapModal = useModal({
        title:"",
        handle:true,
        borderRadius: "30px",
    })

    const {Popup, popupOpen, popupClose} = usePopup();

    const {ScrapAlert, scrapAlertOpen, scrapAlertClose} = useScrapAlert({
        onClick: scrapModal.modalOpen
    });

    const {PlaceAlert, placeAlertOpen, placeAlertClose} = usePlaceAlert({
        onClick: placeModal.modalOpen,
        text:"absc"
    })

    function onUserClick() {
        navigate(`/profile/${data.author.userId}`);
    }

    return(
        <CommunityPageTemplate postId={data.postId} isClap={data.isClap} claps={data.claps} comment={data.comment} bookmark={data.bookmark} shares={data.shares} onCommentClick={() => {}}>
            <ScrapAlert />
            <PlaceAlert />
            <S.ModalWrapper>
                {/* 큰 여행 일정을 내 여행일정에 추가 */}
                <courseModal.Modal>
                    <S.CourseModalContainer>
                        <S.CourseModalHeader>
                            <S.TravelThumbnailWrapper />
                            <S.ModalInfoText ref={CourseModalTextRef}>“부산 여행" 일정에 Day 1을 추가했어요!</S.ModalInfoText>
                        </S.CourseModalHeader>
                        <S.TravelList>
                            <S.TravelListHeader>
                                <S.TravelListTitle>내 여행목록</S.TravelListTitle>
                                <S.TravelCreate>새 여행 생성</S.TravelCreate>
                            </S.TravelListHeader>
                            <S.TravelItem>
                                <S.TravelInfoContainer>
                                    <S.TravelThumbnailWrapper />
                                    <S.TravelInfoTextContainer>
                                        <S.TravelName>부산여행</S.TravelName>
                                        <S.TravelLocation>
                                            <LocationIcon />
                                            부산광역시
                                        </S.TravelLocation>
                                    </S.TravelInfoTextContainer>
                                </S.TravelInfoContainer>
                                <S.TravelAddBtn isClicked={true}>
                                    <CalendarAddFullIcon />
                                    <span>일정에 추가됨</span>
                                </S.TravelAddBtn>
                            </S.TravelItem>
                            <S.TravelItem>
                                <S.TravelInfoContainer>
                                    <S.TravelThumbnailWrapper />
                                    <S.TravelInfoTextContainer>
                                        <S.TravelName>부산여행</S.TravelName>
                                        <S.TravelLocation>
                                            <LocationIcon />
                                            부산광역시
                                        </S.TravelLocation>
                                    </S.TravelInfoTextContainer>
                                </S.TravelInfoContainer>
                                <S.TravelAddBtn isClicked={false}>
                                    <CalendarAddIcon />
                                    <span>일정에 추가</span>
                                </S.TravelAddBtn>
                            </S.TravelItem>
                            <S.TravelItem>
                                <S.TravelInfoContainer>
                                    <S.TravelThumbnailWrapper />
                                    <S.TravelInfoTextContainer>
                                        <S.TravelName>부산여행</S.TravelName>
                                        <S.TravelLocation>
                                            <LocationIcon />
                                            부산광역시
                                        </S.TravelLocation>
                                    </S.TravelInfoTextContainer>
                                </S.TravelInfoContainer>
                                <S.TravelAddBtn isClicked={false}>
                                    <CalendarAddIcon />
                                    <span>일정에 추가</span>
                                </S.TravelAddBtn>
                            </S.TravelItem>
                        </S.TravelList>
                    </S.CourseModalContainer>
                </courseModal.Modal>

                {/* 장소를 여행 일정에 추가 */}
                <placeModal.Modal>
                    <S.PlaceModalContainer>
                        <S.PlaceModalTitle>내 일정에 추가</S.PlaceModalTitle>
                        <S.DayList>
                            <S.PlaceModalSelectBox>
                                <option>부산여행</option>
                            </S.PlaceModalSelectBox>
                            <S.DayItem>
                                <S.DayThumbnail />
                                <S.DayTextContainer>
                                    <S.DayTitle>Day 1</S.DayTitle>
                                    <S.DayDesc>
                                        <LocationIcon />
                                        <span>부산</span>
                                    </S.DayDesc>
                                    <S.DayDesc>
                                        <CalendarIcon />
                                        <span>2024.1.5</span>
                                    </S.DayDesc>
                                </S.DayTextContainer>
                            </S.DayItem>
                            <S.DayItem>
                                <S.DayThumbnail />
                                <S.DayTextContainer>
                                    <S.DayTitle>Day 1</S.DayTitle>
                                    <S.DayDesc>
                                        <LocationIcon />
                                        <span>부산</span>
                                    </S.DayDesc>
                                    <S.DayDesc>
                                        <CalendarIcon />
                                        <span>2024.1.5</span>
                                    </S.DayDesc>
                                </S.DayTextContainer>
                            </S.DayItem>
                        </S.DayList>
                        <S.SaveButton onClick={() => {placeModal.modalClose()}}>
                            저장하기
                        </S.SaveButton>
                    </S.PlaceModalContainer>
                </placeModal.Modal>

                <scrapModal.Modal>
                    <S.CourseModalContainer>
                        <S.ScrapModalHeader>
                            <S.HeaderLeftItems>
                                <S.TravelThumbnailWrapper />
                                <S.ModalInfoText ref={CourseModalTextRef}>“부산 여행" 일정에 Day 1을 추가했어요!</S.ModalInfoText>
                            </S.HeaderLeftItems>
                            <ScrapIcon />
                        </S.ScrapModalHeader>
                        <S.TravelList>
                            <S.TravelListHeader>
                                <S.TravelListTitle>내 폴더</S.TravelListTitle>
                                <S.TravelCreate onClick={() => {
                                    scrapModal.modalClose();
                                    setIsScrapCreate(true);
                                }}>새 폴더 생성</S.TravelCreate>
                            </S.TravelListHeader>
                            <S.TravelItem>
                                <S.TravelInfoContainer>
                                    <S.TravelThumbnailWrapper />
                                    <S.TravelInfoTextContainer>
                                        <S.TravelName>부산여행</S.TravelName>
                                    </S.TravelInfoTextContainer>
                                </S.TravelInfoContainer>
                                <S.TravelAddBtn isClicked={false}>
                                    <ScrapBorderIcon />
                                </S.TravelAddBtn>
                            </S.TravelItem>
                            <S.TravelItem>
                                <S.TravelInfoContainer>
                                    <S.TravelThumbnailWrapper />
                                    <S.TravelInfoTextContainer>
                                        <S.TravelName>부산여행</S.TravelName>
                                    </S.TravelInfoTextContainer>
                                </S.TravelInfoContainer>
                                <S.TravelAddBtn isClicked={false}>
                                    <ScrapBorderIcon />
                                </S.TravelAddBtn>
                            </S.TravelItem>
                            <S.TravelItem>
                                <S.TravelInfoContainer>
                                    <S.TravelThumbnailWrapper />
                                    <S.TravelInfoTextContainer>
                                        <S.TravelName>부산여행</S.TravelName>
                                    </S.TravelInfoTextContainer>
                                </S.TravelInfoContainer>
                                <S.TravelAddBtn isClicked={false}>
                                    <ScrapBorderIcon />
                                </S.TravelAddBtn>
                            </S.TravelItem>
                        </S.TravelList>
                    </S.CourseModalContainer>
                </scrapModal.Modal>

                <S.CreateScrapFolder isOpen={isScrapCreate}>
                    <S.CreateScrapFolderContainer>
                        <S.CreateScrapHeader>
                            <span>새 폴더 이름</span>
                            <S.SaveText onClick={() => {setIsScrapCreate(false)}}>저장</S.SaveText>
                        </S.CreateScrapHeader>
                        <input type="text" />
                    </S.CreateScrapFolderContainer>
                </S.CreateScrapFolder>

                {/* 여행 일정이 없을때 */}
                <Popup padding={"52px"}>
                    <S.PopupContainer>
                        <ExclamationIcon />
                        <S.PopupTitle>먼저 여행을 생성해주세요!</S.PopupTitle>
                        <span>생성된 내 여행이 없어요. <br/>여행 일정을 만들어 코스를 추가해 보세요:)</span>
                        <S.PopupButtonContainer>
                            <S.PopupButton main={false} onClick={() => {popupClose()}}>나중에 할래요</S.PopupButton>
                            <S.PopupButton main={true} onClick={() => {navigate("/mytrip/create")}}>일정 만들래요!</S.PopupButton>
                        </S.PopupButtonContainer>
                    </S.PopupContainer>
                </Popup>
            </S.ModalWrapper>

            <S.Header>
                <S.ThumbnailWrapper src={data.thumbnailURL}/>
                <S.Type>여행기</S.Type>
                <S.Title>{data.title}</S.Title>
                <S.UserContainer>
                    <AvatarIcon onClick={onUserClick}/>
                    <S.UserInfo onClick={onUserClick}>
                        <S.Name>{data.author.name}</S.Name>
                        <S.Date>{data.author.createdAt}</S.Date>
                    </S.UserInfo>
                    
                    {
                        // TODO: 팔로우 버튼 클릭 action
                        data.author.isFollowed ? 
                        <S.FollowBtn>
                           <CheckIcon /> 팔로잉
                        </S.FollowBtn>
                        :
                        <S.FollowBtn>+ 팔로우</S.FollowBtn>
                    }

                </S.UserContainer>
            </S.Header>
            <S.Contents>
                <Summary {...data.summary} />                
                <Routes data={data.routes} alertOpenFn={placeAlertOpen}/>

                {
                    data.routes.map((route) => 
                        <>
                            <S.Day>
                                <span>Day {route.day}</span>
                                {/* TODO: req -> res 저장된 여행 경로 가져와서, alert */}
                                <S.DayLink onClick={() => {placeAlertOpen()}}>코스 저장하기</S.DayLink>
                            </S.Day>
                            {
                                route.places.map((place, idx) => 
                                    <Place 
                                        index={idx+1}
                                        {...place}
                                        onCalendarClick={() => {placeModal.modalOpen()}}
                                        onScrapClick={scrapAlertOpen}
                                    />
                                )
                            }
                        </>
                    )
                }
                
            </S.Contents>
            {/* TODO: 댓글 데이터 삽입, CRUD 가능한 액션 확인 */}
            <S.Comments>
                <Comment id={1}/>
            </S.Comments>
        </CommunityPageTemplate>
    );
}

export default PostPage;