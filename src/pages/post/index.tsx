import AvatarIcon from "../../assets/icons/user.svg?react";
import CheckIcon from "../../assets/icons/check.svg?react";

import Summary from "../../components/post/Summary";
import Routes from "../../components/post/Routes";
import Place from "../../components/post/Place";

import * as S from "./style";
import Comment from "../../components/journal/Comment";
import { useNavigate } from "react-router-dom";
import useScrapAlert from "../../components/post/useScrapAlert";
import usePlaceAlert from "../../components/post/usePlaceAlert";
import CommunityPageTemplate from "../../components/common/CommunityPageTemplate";
import { data } from "../../assets/data/postData";
import useCourseModal from "../../components/video/useCourseModal";
import usePlaceModal from "../../components/video/usePlaceModal";
import useScrapModal from "../../components/video/useScrapModal";
import useNoMyTripAlert from "../../components/video/useNoMyTripAlert";
import FollowBtn from "../../components/common/FollowBtn";

function PostPage() {
    const navigate = useNavigate();

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

    return(
        <CommunityPageTemplate postId={data.postId} isClap={data.isClap} claps={data.claps} comment={data.comment} bookmark={data.bookmark} shares={data.shares} onCommentClick={() => {}}>
            <ScrapAlert />
            <PlaceAlert />
            <CourseModal />
            <PlaceModal />
            <ScrapModal />
            <NoMyTripAlert />

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
                    <S.FollowBtnWrapper>
                        <FollowBtn isFollowing={data.author.isFollowed} />
                    </S.FollowBtnWrapper>
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
                                        onCalendarClick={() => {placeModalOpen}}
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