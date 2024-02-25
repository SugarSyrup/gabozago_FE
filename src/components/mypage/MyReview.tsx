import { useState } from "react";

import * as S from "../../styles/mypage/MyReview.style";
import { myReviewData } from "../../assets/data/mypageData";

import MyReviewFilter from "./MyReviewFilter";
import MyReviewList from "./MyReviewList";

function MyReview() {
    const [filter, setFilter] = useState<"all" | "post" | "video" | "shot" | "photo">("all");

    return (
        <S.Container>
            <MyReviewFilter filter={filter} setFilter={setFilter} />
            <MyReviewList data={myReviewData.filter((review) => filter === "all" ? true : review.type === filter)}/>
        </S.Container>
    );
}

export default MyReview;