import * as S from "./style";

import BusIcon from "../../../assets/icons/bus.svg?react";
import CalendarAddIcon from "../../../assets/icons/calendar_add_border.svg?react";
import { useCallback, useEffect, useRef, useState } from "react";

function usePlaceTimeline() {
    const timelineRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        timelineRef.current?.scrollTo({
            left:198 * index - (timelineRef.current.offsetWidth / 2) + 16,
            behavior:"smooth"
        })
        console.log(index);
    }, [index]);

    function getCurrentIndex() {
        return index;
    }

    function movePrev() {
        console.log(index);
        setIndex(prev => (prev - 1) >= 0 ? prev - 1 : prev);
        // index 상태값이 왜 0으로 고정이지?
        if(index > 0) {
            setIndex(prev => prev - 1);
        }
    }

    function moveNext() {
        setIndex(prev => prev + 1);
    }

    function moveIndex(idx: number) {
        setIndex(idx);
    }

    const PlaceTimeline = useCallback(() => {
        return(
            <S.VideoTimeline ref={timelineRef}>
                <S.TimeLineItem>
                    <S.TimeLineIndex>1</S.TimeLineIndex>
                    <S.TimeLineInfo>
                        <span>장소명</span>
                        <span>테마</span>
                    </S.TimeLineInfo>
                    <CalendarAddIcon />
                </S.TimeLineItem>
                <S.TimeLineLinker>
                    <div>
                        <BusIcon />
                        <span>15분</span>
                    </div>
                </S.TimeLineLinker>
                <S.TimeLineItem>
                    <S.TimeLineIndex>1</S.TimeLineIndex>
                    <S.TimeLineInfo>
                        <span>장소명</span>
                        <span>테마</span>
                    </S.TimeLineInfo>
                    <CalendarAddIcon />
                </S.TimeLineItem>
                
            </S.VideoTimeline>
        )
    }, []
    )

    return { PlaceTimeline, moveIndex, movePrev, moveNext, getCurrentIndex};
};

export default usePlaceTimeline;