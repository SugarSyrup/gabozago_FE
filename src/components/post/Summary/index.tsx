import LocationIcon from "../../../assets/icons/location.svg?react";
import PeoplesIcon from "../../../assets/icons/peoples.svg?react";
import CalendarIcon from "../../../assets/icons/calendar.svg?react";
import CardIcon from "../../../assets/icons/card.svg?react";
import SnowIcon from "../../../assets/icons/snow.svg?react";
import ThemeIcon from "../../../assets/icons/theme.svg?react";

import * as S from "./style";

interface Props {
    locations: string[],
    people: number,
    schedule: number,
    budget: number,
    seasons: string[],
    themes: string[]
}

function Summary({locations, people, schedule, budget, seasons, themes}: Props) {
    return  (
        <S.Summary>
            <S.Places>
                <LocationIcon />
                <S.SummaryName>지역</S.SummaryName>
                <S.SummaryValueWrapper>
                    {locations.map((location, index) => 
                        <>
                            <S.SummaryValue>{location}</S.SummaryValue>
                            { locations.length - 1 !== index && <S.Dot>•</S.Dot> }
                        </>
                    )}
                </S.SummaryValueWrapper>
            </S.Places>
            <S.People>
                <PeoplesIcon />
                <S.SummaryName>인원</S.SummaryName>
                <S.SummaryValue>{people}인</S.SummaryValue>
            </S.People>
            <S.Dates>
                <CalendarIcon />
                <S.SummaryName>일정</S.SummaryName>
                <S.SummaryValue>{schedule - 1}박 {schedule}일</S.SummaryValue>
            </S.Dates>
            <S.Payments>
                <CardIcon />
                <S.SummaryName>경비</S.SummaryName>
                <S.SummaryValue>총 {budget} 만원</S.SummaryValue>
            </S.Payments>
            <S.Seasons>
                <SnowIcon />
                <S.SummaryName>계절</S.SummaryName>
                <S.SummaryValueWrapper>
                    {seasons.map((season, index) => 
                        <>
                            <S.SummaryValue>{season}</S.SummaryValue>
                            {seasons.length - 1 !== index && <S.Dot>•</S.Dot>}
                        </>
                    )}
                </S.SummaryValueWrapper>
            </S.Seasons>
            <S.Themes>
                <ThemeIcon />
                <S.SummaryName>지역</S.SummaryName>
                <S.SummaryValueWrapper>
                    {themes.map((theme) => 
                        <S.SummaryValue>#{theme}</S.SummaryValue>
                    )}
                </S.SummaryValueWrapper>
            </S.Themes>
        </S.Summary>
    )
}

export default Summary;