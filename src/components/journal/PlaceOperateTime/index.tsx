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
    const [data, setData] = useState<string[][]>();
    const date = new Date();

    useEffect(() => {
        setData(opening_hours.split("\n").map((item) => item.split(": ")))
    }, []);

    useEffect(() => {
        if(data) {
            let [startType , startTime,  ] = data[`${date.getDay() === 0 ? 6 : date.getDay() - 1}`][1].split("~")[0].split(" ");
            let [ , endType, endTime] = data[`${date.getDay() === 0 ? 6 : date.getDay() - 1}`][1].split("~")[1].split(" ");
            console.log(date.getHours());
            console.log(startType, startTime);
            console.log(endType, endTime);

            let calcStartTime = startType === "오전" ? Number(startTime) : Number(startTime) + 12;
            let calcEndTime = endType === "오전" ? Number(endTime) : Number(endTime) + 12;

            if(date.getHours() > calcStartTime && date.getHours() < calcEndTime) {
                setIsOperate(true);
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
                <span>{ data && data[`${date.getDay() === 0 ? 6 : date.getDay() - 1}`][1].split("~")[1] } 영업 종료</span>
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