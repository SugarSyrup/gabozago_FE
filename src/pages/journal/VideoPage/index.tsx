import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";

import { data } from "../../../assets/data/postData";

import AvatarIcon from "../../../assets/icons/user.svg?react";
import CalendarAddIcon from "../../../assets/icons/calendar_add_border.svg?react";
import ScrapBorderIcon from "../../../assets/icons/bookmark.svg?react";

import Summary from "../../../components/post/Summary";
import Routes from "../../../components/post/Routes";
import usePlaceSlider from "../../../components/video/usePlaceSlider";
import usePlaceTimeline from "../../../components/video/usePlaceTimeline";
import CommunityPageTemplate from "../../../components/common/CommunityPageTemplate";
import useNoMyTripAlert from "../../../components/video/useNoMyTripAlert";
import usePlaceAlert from "../../../components/post/usePlaceAlert";
import useScrapAlert from "../../../components/post/useScrapAlert";
import useScrapModal from "../../../components/video/useScrapModal";
import usePlaceModal from "../../../components/video/usePlaceModal";
import useCourseModal from "../../../components/video/useCourseModal";

import * as S from "./style";
import FollowBtn from "../../../components/common/FollowBtn";

function VideoPage() {const navigate = useNavigate();
    const playerRef = useRef<YouTube>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const [videoTimes, setVideoTimes] = useState(0);
    const [placeIdx, setPlaceIdx] = useState(0);

    const {PlaceTimeline} = usePlaceTimeline();
    const {PlaceSlider, getCurrentIndex} = usePlaceSlider();

    const {CourseModal, courseModalOpen, courseModalClose, setCourseModalData} = useCourseModal();
    const {PlaceModal, placeModalOpen, placeModalClose, setPlaceModalData} = usePlaceModal();
    const {ScrapModal, scrapModalOpen, scrapModalClose, setScrapModalData} = useScrapModal();

    const {ScrapAlert, scrapAlertOpen, scrapAlertClose} = useScrapAlert({
        onClick: scrapModalOpen
    });
    const {PlaceAlert, placeAlertOpen, placeAlertClose} = usePlaceAlert({
        onClick: placeModalOpen,
        text:"absc"
    })

    const {NoMyTripAlert, noMyTripAlertClose, noMyTripAlertOpen} = useNoMyTripAlert();

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
            <ScrapAlert />
            <PlaceAlert />
            <CourseModal />
            <PlaceModal />
            <ScrapModal />
            <NoMyTripAlert />

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
                    <S.FollowBtnWrapper>
                        <FollowBtn isFollowing={data.author.isFollowed}/>
                    </S.FollowBtnWrapper>
                </S.UserContainer>
            </S.Header>
            <S.Contents>
                <Summary {...data.summary} />  
                <S.Explain>여러분 안녕하세요! 오늘은 여행 브이로그를 가져왔습니다. 2023 올해 제 목표가 일단 시작, 일단 출발 이거든요! 망설이기만 하다가가는 아무것도 못하잖아요 그래서 올해는 너무 깊이 생각하지 않고 뭐든 일단! 해보는 걸로 정했습니다! 그래서 떠난 부산 여행! 모두가 말렸던 부산 당일치기를!!!! 제가 해냈습니다!!!! 후훗😎 그럼 오늘 영상도 재밌게 봐주세요!💙</S.Explain>              
            </S.Contents>
            <S.Contents style={{"paddingBottom": "120px"}}>
                <S.SubTitle>여행 루트</S.SubTitle>
                <S.SubTitleDesc>최민석님의 여행루트를 따라 여행해보세요</S.SubTitleDesc>
                <Routes data={data.routes} alertOpenFn={placeAlertOpen}/>

               
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