import { useState } from "react";

import * as S from "../../styles/mypage/MyActivity.style";

import MyActivityFilter from "./MyActivityFilter";
import MyClapsPostList from "./MyClapsPostList.tsx";


import { myClapsData } from "../../assets/data/mypageData";

function MyActivity() {
    const [filter, setFilter] = useState<"post" | "comment">("post");

    return (
        <S.Container>
            <MyActivityFilter filter={filter} setFilter={setFilter} shareCount={3} commentCount={4}/>
            {
                filter === "post" ?
                <MyClapsPostList data={myClapsData}/>
                :
                <></>
            }
        </S.Container>
    );
}

export default MyActivity;