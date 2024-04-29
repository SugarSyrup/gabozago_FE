import Headline from "../../common/Typography/Headline";
import Label from "../../common/Typography/Label";
import Title from "../../common/Typography/Title";

import BookMarkIcon from "../../../assets/icons/bookmark.svg?react";

import * as S from "./style";
import ShortFormList from "../journals/shortform/ShortFormList";

function Recommendation() {

    return(
        <>
            <S.SliderContainer>
                <Headline size="sm">금주 인기 아티클 Top 5 🔥</Headline>
                <S.Slider>
                    <S.TopSliderItem>
                        <S.SliderImg />
                        <Label size="lg" noOfLine={2}>2년만에 15개 점포로 확장한, 제과점 대표의 ‘디저트'와 함께하는</Label>
                        <BookMarkIcon />
                    </S.TopSliderItem>
                </S.Slider>
            </S.SliderContainer>
            <S.SliderContainer>
                <Title size="lg">인기 Top 6-10 아티클</Title>
                <S.Slider>
                    <S.SliderItem>
                        <S.SliderImg />
                        <Label size="md" noOfLine={2}>몽골여행 중 만난 어쩌구 저쩌구ㅇㅎㅇㅎㅇㅎㅇㅇ</Label>
                        <BookMarkIcon />
                    </S.SliderItem>
                </S.Slider>
            </S.SliderContainer>
            <S.SliderContainer>
                <Headline size="sm">인기 숏폼 콘텐츠</Headline>
                <S.ShortFormListContainer>
                    <ShortFormList data={[
                        {
                            id: 0,
                            title: "15초 여수 맛집투어 정리!",
                            location: "여수",
                            thumbnail: "https://placehold.co/400x600",
                        },
                        {
                            id: 1,
                            title: "15초 여수 맛집투어 정리!",
                            location: "경주",
                            thumbnail: "https://placehold.co/400x600",
                        },
                        {
                            id: 2,
                            title:
                            "각급 선거관리위원회의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 대통령은 제1항과 제2항의 처분 또는 명령을 한 때에는 지체없이 국회에 보고하여 그 승인을 얻어야 한다.",
                            location: "지역",
                            thumbnail: "https://placehold.co/400x600",
                        },
                        {
                            id: 3,
                            title: "당신은 창의적이고 독특한 아이디어를 가진 탁월한 사람입니다",
                            location: "",
                            thumbnail: "https://placehold.co/400x600",
                        },
                        {
                            id: 4,
                            title:
                            "당신은 창의적이고 독특한 아이디어를 가진 탁월한 사람입니다. 당신의 창의성과 독립적인 사고는 다른 사람들에게 영감을 주고 새로운 시각을 제공합니다. 당신은 문제에 대한 해결책을 찾는 것이 뛰어나며, 어려운 상황에서도 차분하고 명확한 판단력을 가지고 있습니다.",
                            location: "지역",
                            thumbnail: "https://placehold.co/400x600",
                        },
                    ]}/>
                </S.ShortFormListContainer>
            </S.SliderContainer>
        </>
    )
}

export default Recommendation;