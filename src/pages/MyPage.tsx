import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import UserIcon from "../assets/icons/user.svg?react";
import { userDataType } from "../assets/data/userData";

import SettingIcon from "../assets/icons/setting.svg?react";
import PageTemplate from "../components/common/PageTemplate";

import * as S from "../styles/pages/MyPage.style";
import MyTrip from "../components/mypage/MyTrip";


function MyPage() {
    const [ currentTap, setCurrentTap ] = useState<"trip" | "review" | "activity">("trip")
    const {name, follower, following, reviews, hearts, views} = useLoaderData() as userDataType;

    return (
        <PageTemplate>
            <S.SettingIconWrapper>
                <SettingIcon />
            </S.SettingIconWrapper>
            <S.FixedContainer>
                <S.Header>
                    <S.UserProfile>
                        <UserIcon />
                        <S.Name>{name}</S.Name>
                    </S.UserProfile>
                    <S.ProfileEditBtn>프로필 수정</S.ProfileEditBtn>
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
                <S.TapNavigationBar>
                    <S.TapNavigation onClick={() => {setCurrentTap("trip")}} isHighlight={currentTap === "trip"} >나의 여행</S.TapNavigation>
                    <S.TapNavigation onClick={() => {setCurrentTap("review")}} isHighlight={currentTap === "review"} >나의 리뷰</S.TapNavigation>
                    <S.TapNavigation onClick={() => {setCurrentTap("activity")}} isHighlight={currentTap === "activity"} >나의 활동</S.TapNavigation>
                </S.TapNavigationBar>
                <S.SeperateLine>
                    <S.HighLightLine position={currentTap}/>
                </S.SeperateLine>
            </S.FixedContainer>
            <S.Content>
                <MyTrip />
            </S.Content>
        </PageTemplate>
    )
}


export default MyPage;