import { useEffect, useRef, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

import UserIcon from "../assets/icons/user.svg?react";
import { userDataType } from "../assets/data/userData";

import SettingIcon from "../assets/icons/setting.svg?react";
import PageTemplate from "../components/common/PageTemplate";

import * as S from "../styles/pages/ProfilePage.style";
import UserTrip from "../components/profile/UserTrip";
import UserReview from "../components/profile/UserReview";
import UserActivity from "../components/profile/UserActivity";
import FollowBtn from "../components/profile/FollowBtn";


function ProfilePage() {
    const { uid } = useParams();
    const [ isMyProfile, setIsMyProfile ] = useState<boolean>(false);
    const [ currentTap, setCurrentTap ] = useState<"trip" | "review" | "activity">("trip")
    const {name, follower, following, reviews, hearts, views, desc} = useLoaderData() as userDataType;
    const FixedHeaderRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        //TODO : uid와 비교해서 isMyProfile 변경
    }, [])

    return (
        <PageTemplate nav={false} >
            <S.SettingIconWrapper>
                <SettingIcon />
            </S.SettingIconWrapper>
            <S.FixedContainer ref={FixedHeaderRef}>
                <S.Header>
                    <S.UserProfile>
                        <UserIcon />
                        <S.Name>{name}</S.Name>
                    </S.UserProfile>
                    {isMyProfile ? 
                    <S.ProfileEditBtn onClick={() => {navigate(`edit`)}}> 프로필 수정</S.ProfileEditBtn>
                    :
                    //TODO : 팔로우 여부 정보 가져오기
                    <FollowBtn isFollowing={false}/>
                    }
                </S.Header>
                <S.Statics>
                    <S.StaticItem>
                        <S.StaticItemName>팔로워</S.StaticItemName>
                        <S.StaticItemStat>{follower}</S.StaticItemStat>
                    </S.StaticItem>
                    <S.StaticItem>
                        <S.StaticItemName>팔로잉</S.StaticItemName>
                        <S.StaticItemStat>{following}</S.StaticItemStat>
                    </S.StaticItem>
                    <S.StaticItem>
                        <S.StaticItemName>내 후기</S.StaticItemName>
                        <S.StaticItemStat>{reviews}</S.StaticItemStat>
                    </S.StaticItem>
                    <S.StaticItem>
                        <S.StaticItemName>공감수</S.StaticItemName>
                        <S.StaticItemStat>{hearts}</S.StaticItemStat>
                    </S.StaticItem>
                    <S.StaticItem>
                        <S.StaticItemName>조회수</S.StaticItemName>
                        <S.StaticItemStat>{views}</S.StaticItemStat>
                    </S.StaticItem>
                </S.Statics>

                {
                    !isMyProfile && 
                    <S.UserIntroduce>
                        <span>
                            {desc}
                        </span>
                    </S.UserIntroduce>
                }

                <S.TapNavigationBar>
                    <S.TapNavigation onClick={() => {setCurrentTap("trip")}} isHighlight={currentTap === "trip"} >나의 여행</S.TapNavigation>
                    <S.TapNavigation onClick={() => {setCurrentTap("review")}} isHighlight={currentTap === "review"} >나의 리뷰</S.TapNavigation>
                    <S.TapNavigation onClick={() => {setCurrentTap("activity")}} isHighlight={currentTap === "activity"} >나의 활동</S.TapNavigation>
                </S.TapNavigationBar>
                <S.SeperateLine>
                    <S.HighLightLine position={currentTap}/>
                </S.SeperateLine>
            </S.FixedContainer>
            <S.Content FixedContainerHeight={FixedHeaderRef.current?.offsetHeight} >
                {(() => {
                    switch (currentTap) {
                        case "trip" :
                            return <UserTrip username={isMyProfile ? "나" : "USER"}/>;
                        case "review":
                            return <UserReview />;
                        case "activity":
                            return <UserActivity />;
                        default:
                            return null;
                    }
                })()}
            </S.Content>
        </PageTemplate>
    )
}


export default ProfilePage;