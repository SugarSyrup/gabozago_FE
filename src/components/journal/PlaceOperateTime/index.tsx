import { useEffect, useState } from "react";

import ChevronTopIcon from "../../../assets/icons/chevron_top.svg?react";
import ChevronBottomIcon from "../../../assets/icons/chevron_bottom.svg?react";

import * as S from "./style";

const operateTime = [
    {
        day: "SUN",
        startTime: -1,
        endTime: -1
    },
    {
        day: "MON",
        startTime: 9,
        endTime: 18
    },
    {
        day: "THU",
        startTime: 9,
        endTime: 18
    },
    {
        day: "WED",
        startTime: 9,
        endTime: 18
    },
    {
        day: "THUR",
        startTime: 9,
        endTime: 18
    },
    {
        day: "FRI",
        startTime: 9,
        endTime: 18
    },
    {
        day: "SAT",
        startTime: 9,
        endTime: 18
    }
]

function converDate(date: string) {
    switch(date) {
        case "MON" :
            return "월요일";
            break;
        case "THU" :
            return "화요일";
            break;
        case "WED" :
            return "수요일";
            break;
        case "THUR" :
            return "목요일";
            break;
        case "FRI" :
            return "금요일";
            break;
        case "SAT" :
            return "토요일";
            break;
        case "SUN" :
            return "일요일";
            break;
    }
}

function convertTime(time: number) {
    if(time > 12) {
        return `오후 ${(time - 12)}:00`;
    }
    else { 
        return `오전 ${time}:00`;
    }

}

function PlaceOperateTime() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOperate, setIsOperate] = useState(false);

    useEffect(() => {
        const current = new Date();
        const currentTime = current.getHours() * 60 + current.getMinutes();
        if(operateTime[current.getDay()].startTime * 60 < currentTime && operateTime[current.getDay()].endTime  * 60 < currentTime) {
            setIsOperate(true);
        } else {
            setIsOperate(false);
        }
    }, [])

    return(
        <S.Container>
            <S.InfomationText>
                {isOperate ?
                    <span className="main">영업중</span>
                :
                    <span className="red">영업종료</span>
                }
                <span>∙</span>
                <span>{convertTime(operateTime[1].endTime)} 영업 종료</span>
                {
                    isOpen ?
                    <ChevronTopIcon onClick={() => {setIsOpen(prev => !prev)}} />
                    :
                    <ChevronBottomIcon onClick={() => {setIsOpen(prev => !prev)}} />
                }
            </S.InfomationText>
            {isOpen &&
            <S.OperateTimeList>
                {
                    operateTime.map((item) => 
                        <S.OperateTimeItem>
                            <span>
                                {converDate(item.day)}
                            </span>
                            {item.startTime !== -1 ?
                                <span>{convertTime(item.startTime)} ~ {convertTime(item.endTime)}</span>
                            :
                                <span className="red">휴무일</span>
                            }

                        </S.OperateTimeItem>
                    )
                }
            </S.OperateTimeList>
            }
        </S.Container>
    )
}

export default PlaceOperateTime;