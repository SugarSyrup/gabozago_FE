import { useState } from "react";

import * as S from "../../styles/mypage/MyActivity.style";

import MyActivityFilter from "./MyActivityFilter";
import MyClapsPostList from "./MyClapsPostList";
import MyCommentsList from "./MyCommentsList";

import { myClapsData, myCommentsData } from "../../assets/data/mypageData";

function MyActivity() {
    const [filter, setFilter] = useState<"post" | "comment">("post");

    return (
        <S.Container>
            <MyActivityFilter filter={filter} setFilter={setFilter} shareCount={3} commentCount={4}/>
            {
                filter === "post" ?
                <MyClapsPostList data={myClapsData}/>
                :
                <MyCommentsList data={myCommentsData}/>
            }
        </S.Container>
    );
}

export default MyActivity;