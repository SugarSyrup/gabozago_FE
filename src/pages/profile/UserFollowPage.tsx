import PageTemplate from "../../components/common/PageTemplate";
import * as S from "../../styles/pages/profile/UserFollowPage.style";
import LeftChevronIcon from "../../assets/icons/leftChevron.svg?react";
import { useState } from "react";
import SearchIcon from "../../assets/icons/search.svg?react";
import FollowList from "../../components/profile/FollowList";

function UserFollowPage() {
    const [ currentTap, setCurrentTap ] = useState<"follower" | "following">("follower");

    return(
        <PageTemplate>
            <S.FixedHeader>
                <S.Header>
                    <LeftChevronIcon />
                    <span>최민석</span>
                </S.Header>
                <S.TabNavigation>
                    <S.NavigationItem isHighlight={currentTap === "follower"} onClick={() => {setCurrentTap("follower")}}>팔로워</S.NavigationItem>
                    <S.NavigationItem isHighlight={currentTap === "following"} onClick={() => {setCurrentTap("following")}}>팔로잉</S.NavigationItem>
                </S.TabNavigation>
                <S.SeperateLine>
                    <S.HighLightLine position={currentTap}/>
                </S.SeperateLine>
                
                <S.InputWrapper>
                    <S.Input type="text" placeholder="사용자명, 닉네임을 검색해보세요."/>
                    <S.ButtonWrapper>
                        <SearchIcon />
                    </S.ButtonWrapper>
                </S.InputWrapper>
                <FollowList data={[]} />
            </S.FixedHeader>
        </PageTemplate>
    )
}

export default UserFollowPage;