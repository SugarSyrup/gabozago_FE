import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";

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
import usePlaceSlider from "../../components/video/usePlaceSlider";
import usePlaceTimeline from "../../components/video/usePlaceTimeline";
import CommunityPageTemplate from "../../components/common/CommunityPageTemplate";
import useModal from "../../hooks/useModal";
import usePopup from "../../hooks/usePopup";

import { data } from "../../assets/data/postData";
import * as S from "./style";

function VideoPage() {const navigate = useNavigate();
    const [isMyTripAlertOpen, setIsMyTripAlertOpen] = useState<boolean>(false);
    const [isScrapAlertOpen, setIsScrapAlertOpen] = useState<boolean>(false);
    const [isScrapCreate, setIsScrapCreate] = useState<boolean>(false);
    const PlaceAlertTextRef = useRef<HTMLSpanElement>(null);
    const CourseModalTextRef = useRef<HTMLSpanElement>(null);
    const playerRef = useRef<YouTube>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const [videoTimes, setVideoTimes] = useState(0);
    const [placeIdx, setPlaceIdx] = useState(0);
    const {PlaceSlider, getCurrentIndex} = usePlaceSlider();
    const {PlaceTimeline} = usePlaceTimeline();

    function alertOpen(tripName: string, day: number) {
        if(PlaceAlertTextRef.current) {
            PlaceAlertTextRef.current.innerText = `"${tripName}" 일정에 추가되었습니다.`;
        }

        if(CourseModalTextRef.current) {
            CourseModalTextRef.current.innerText = `"${tripName}" 일정에 Day ${day}을 추가했어요!`
        }

        popupOpen();
        // setIsMyTripAlertOpen(true);
        // setTimeout(() => {
        //     setIsMyTripAlertOpen(false)
        // }, 3000);
    }

    function scrapOpen() { 
        setIsScrapAlertOpen(true);
        setTimeout(() => {
            setIsScrapAlertOpen(false);
        }, 3000);
    }

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


    function onUserClick() {
        navigate(`/profile/${data.author.userId}`);
    }

    useEffect(() => {
		const interval = setInterval(async () => {
			const elapsed = await playerRef.current
				?.getInternalPlayer()
				.getCurrentTime();

			const seconds = Math.floor(elapsed);
            setVideoTimes(seconds);
		}, 100);

		return () => {
			clearInterval(interval);
		};
	}, []);

    useEffect(() => {
        const arr = [60,120,180];
        if(videoTimes > arr[placeIdx] && videoTimes < arr[placeIdx + 1]) {
            timelineRef.current?.scrollTo({
                left:100,
                behavior: "smooth"
            })
        }
    }, [videoTimes]);

    return(
        <CommunityPageTemplate postId={data.postId} isClap={data.isClap} claps={data.claps} comment={data.comment} bookmark={data.bookmark} shares={data.shares} onCommentClick={() => {}}>
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

                {
                    isScrapCreate && 
                    <S.CreateScrapFolder isOpen={isScrapCreate}>
                        <S.CreateScrapFolderContainer>
                            <S.CreateScrapHeader>
                                <span>새 폴더 이름</span>
                                <S.SaveText onClick={() => {setIsScrapCreate(false)}}>저장</S.SaveText>
                            </S.CreateScrapHeader>
                            <input type="text" />
                        </S.CreateScrapFolderContainer>
                    </S.CreateScrapFolder>
                }

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

                {/* 일정에 추가 Alert */}
                <S.Alert isOpen={isMyTripAlertOpen}>
                    <CalendarAddIcon />
                    <span ref={PlaceAlertTextRef}></span>
                    <S.ModalOpenText onClick={() => {courseModal.modalOpen()}}>변경하기</S.ModalOpenText>
                </S.Alert>

                <S.Alert isOpen={isScrapAlertOpen}>
                    <ScrapIcon />
                    <span>스크랩이 완료되었습니다</span>
                    <S.ModalOpenText onClick={() => {scrapModal.modalOpen()}}>내 스크랩 확인하기</S.ModalOpenText>
                </S.Alert>
            </S.ModalWrapper>

            <S.Header>
                <S.VideoWrapper>
                    <YouTube 
                        videoId="2yqIzDJmA1k"
                        opts={{"width":"100%", "height":"340px",
                            "playerVars": {
                                "autoplay" : 1
                            }
                        }}
                        ref={playerRef}
                        onEnd={() => {
                            playerRef.current?.resetPlayer();
                        }}
                    />
                </S.VideoWrapper>
                <PlaceTimeline />
                <S.Type>조회수 250회 • 10분전</S.Type>
                <S.Title>10년 지기 친구들과 다녀온 2박3일 부산 여행</S.Title>
                <S.UserContainer>
                    <AvatarIcon onClick={onUserClick}/>
                    <S.UserInfo onClick={onUserClick}>
                        <S.Name>{data.author.name}</S.Name>
                        <S.Date>팔로워 5명</S.Date>
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
                <S.Explain>여러분 안녕하세요! 오늘은 여행 브이로그를 가져왔습니다. 2023 올해 제 목표가 일단 시작, 일단 출발 이거든요! 망설이기만 하다가가는 아무것도 못하잖아요 그래서 올해는 너무 깊이 생각하지 않고 뭐든 일단! 해보는 걸로 정했습니다! 그래서 떠난 부산 여행! 모두가 말렸던 부산 당일치기를!!!! 제가 해냈습니다!!!! 후훗😎 그럼 오늘 영상도 재밌게 봐주세요!💙</S.Explain>              
            </S.Contents>
            <S.Contents style={{"paddingBottom": "120px"}}>
                <S.SubTitle>여행 루트</S.SubTitle>
                <S.SubTitleDesc>최민석님의 여행루트를 따라 여행해보세요</S.SubTitleDesc>
                <Routes data={data.routes} alertOpenFn={alertOpen}/>

               
                <S.SubTitle style={{"marginTop": "40px"}}>장소 정보</S.SubTitle>
                <S.SubTitleDesc>영상 속 장소의 정보를 바로 확인해보세요.</S.SubTitleDesc>
                
                <S.PlaceBtns>
                    <S.PlaceBtn>
                        <CalendarAddIcon />
                        <span>내 일정에 추가하기</span>
                    </S.PlaceBtn>
                    <S.PlaceBtn onClick={() => {console.log(getCurrentIndex())}}>
                        <ScrapBorderIcon />
                        <span>장소 스크랩에 저장</span>
                    </S.PlaceBtn>
                </S.PlaceBtns>

                <PlaceSlider />
            </S.Contents>
        </CommunityPageTemplate>
    );
}

export default VideoPage;