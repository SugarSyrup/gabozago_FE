import { useEffect, useState } from "react";

import ChevronTopIcon from "../../../assets/icons/chevron_top.svg?react";
import ChevronBottomIcon from "../../../assets/icons/chevron_bottom.svg?react";

import * as S from "./style";

interface Props {
    opening_hours: string,
}

function PlaceOperateTime({opening_hours}: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isOperate, setIsOperate] = useState(false);
    const [displayEndTime, setDisplayEndTime] = useState<string>("");
    const [data, setData] = useState<string[][]>();
    const date = new Date();

    useEffect(() => {
        setData(opening_hours.split("\n").map((item) => item.split(": ")))
    }, []);

    function seperateTypeNTime({item}: {item: string}) {
        let [startType , startTime,  ] = item.split("~")[0].split(" ");
        let endType = "";
        let endTime = "";

        if(!item.split("~")[1].includes(" ")){
            endType = startType;
            endTime = item.split("~")[1];
        }else {
            let [ , tmpEndType, tmpEndTime] = item.split("~")[1].split(" ");
            endType = tmpEndType;
            endTime = tmpEndTime;
        }

        return {startType, startTime, endType, endTime};
    }

    function transformTime({type, time}: {type: string, time: string}) {
        return type === "오전" ? Number(time.split(":")[0]) : Number(time.split(":")[0]) + 12
    }

    function isOperateFn({startTime, endTime}: {startTime: number, endTime: number}) {
        return date.getHours() > startTime && date.getHours() < endTime;
    }

    useEffect(() => {
        if(data) {
            let flag = false;
            let displayEndTime = "";
            let todayOperateInfo = data[`${date.getDay() === 0 ? 6 : date.getDay() - 1}`][1];

            if(todayOperateInfo === "휴무일") {
                setIsOperate(false);
            }
            else if(todayOperateInfo === "24시간 영업") {
                setIsOperate(true);
            } else {
                if(todayOperateInfo.includes(",")) {
                    todayOperateInfo.split(", ").forEach((item) => {
                        const {startType, startTime, endType, endTime} = seperateTypeNTime({item});

                        let calcStartTime = transformTime({type: startType, time: startTime});
                        let calcEndTime = transformTime({type: endType, time: endTime});

                        if(isOperateFn({startTime: calcStartTime, endTime: calcEndTime})){
                            flag = true;
                            displayEndTime = endType + " " + endTime;
                            return;
                        }
                    })
                }
                else {
                    const {startType, startTime, endType, endTime} = seperateTypeNTime({item :todayOperateInfo});

                    let calcStartTime = transformTime({type: startType, time: startTime});
                    let calcEndTime = transformTime({type: endType, time: endTime});

                    if(isOperateFn({startTime: calcStartTime, endTime: calcEndTime})){
                        flag = true;
                        displayEndTime = endType + " " + endTime;
                    }
                }
                
                setDisplayEndTime(displayEndTime);
                setIsOperate(flag);
            }
        }
    }, [data])

    return(
        <S.Container>
            <S.InfomationText>
                {isOperate ?
                    <span className="main">영업중</span>
                :
                    <span className="red">영업종료</span>
                }
                <span>∙</span>
                <span>{ displayEndTime } 영업 종료</span>
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
                    data && data.map((item) => 
                        <S.OperateTimeItem>
                            <span>{item[0]}</span>
                            <span>{item[1]}</span>
                        </S.OperateTimeItem>
                    )
                }
            </S.OperateTimeList>
            }
        </S.Container>
    )
}

export default PlaceOperateTime;