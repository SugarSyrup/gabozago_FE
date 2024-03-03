import { useState } from "react";

import * as S from "./style";

import UserActivityFilter from "../UserActivityFilter";
import UserClapsPostList from "../UserClapsPostList";
import UserCommentsList from "../UserCommentsList";

import { userClapsData, userCommentsData } from "../../../assets/data/userpageData";

function UserActivity() {
    const [filter, setFilter] = useState<"post" | "comment">("post");

    return (
        <S.Container>
            <UserActivityFilter filter={filter} setFilter={setFilter} shareCount={3} commentCount={4}/>
            {
                filter === "post" ?
                <UserClapsPostList data={userClapsData}/>
                :
                <UserCommentsList data={userCommentsData}/>
            }
        </S.Container>
    );
}

export default UserActivity;